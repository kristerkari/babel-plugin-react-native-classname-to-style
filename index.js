module.exports = function(babel) {
  var css = null;
  var style = null;
  var t = babel.types;
  var templateLiteral = null;

  function isJoinExpression(value) {
    return (
      value.expression.callee &&
      value.expression.callee.property &&
      value.expression.callee.property.name &&
      value.expression.callee.property.name.toLowerCase() === "join" &&
      t.isArrayExpression(value.expression.callee.object)
    );
  }

  function isTemplateLiteralWithExpressions(value) {
    return (
      value &&
      value.expression &&
      value.expression.type === "TemplateLiteral" &&
      value.expression.expressions.length > 0
    );
  }

  function isTemplateLiteralWithString(value) {
    return value.expression && value.expression.type === "StringLiteral";
  }

  function isArrayWithJoin(value) {
    return t.isJSXExpressionContainer(value) && isJoinExpression(value);
  }

  return {
    visitor: {
      JSXOpeningElement: {
        exit(path, state) {
          if (
            css === null ||
            t.isStringLiteral(css.node.value) ||
            isTemplateLiteralWithString(css.node.value)
          ) {
            return;
          }

          var isSameElement =
            css && style && css.parentPath.node !== style.parentPath.node;

          if (isArrayWithJoin(css.node.value)) {
            if (css && style) {
              var classes = [];
              classes = classes.concat(
                css.node.value.expression.callee.object.elements
              );
              classes.push(style.node.value.expression);
              style.node.value = t.arrayExpression(classes);
              css.replaceWith(style);
              style.remove();
            } else {
              style = css;
              style.node.name.name = "style";
              style.node.value = t.arrayExpression(
                css.node.value.expression.callee.object.elements
              );
            }
          } else if (isSameElement || style == null) {
            style = css;
            style.node.name.name = "style";
          } else if (css && style && templateLiteral === null) {
            style.node.value = t.arrayExpression([
              css.node.value.expression,
              style.node.value.expression
            ]);
            css.remove();
          }
          css = null;
          style = null;
        }
      },
      JSXAttribute: function JSXAttribute(path, state) {
        var name = path.node.name.name;
        if (name === "className") {
          css = path;
        } else if (name === "style") {
          style = path;
        }

        if (css === null) {
          return;
        }

        if (style && style.node.value.expression && templateLiteral) {
          var classes = [];
          classes = classes.concat(templateLiteral.expression.expressions);
          classes.push(style.node.value.expression);
          style.node.value = t.arrayExpression(classes);
          css.replaceWith(style);
          style.remove();
          templateLiteral = null;
          css = null;
          style = null;
        } else if (isTemplateLiteralWithExpressions(css.node.value)) {
          templateLiteral = css.node.value;
          css.node.value = t.arrayExpression(
            css.node.value.expression.expressions
          );
          css.node.name.name = "style";
        }
      }
    }
  };
};
