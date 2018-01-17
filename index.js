module.exports = function(babel) {
  var css = null;
  var style = null;
  var t = babel.types;

  function isJoinExpression(value) {
    return (
      value.expression.callee &&
      value.expression.callee.property &&
      value.expression.callee.property.name &&
      value.expression.callee.property.name.toLowerCase() === "join" &&
      t.isArrayExpression(value.expression.callee.object)
    );
  }

  return {
    visitor: {
      JSXOpeningElement: {
        exit(path, state) {
          if (css === null) {
            return;
          }

          if (css.node.value.type === "StringLiteral") {
            return;
          }

          var isArrayWithJoin =
            t.isJSXExpressionContainer(css.node.value) &&
            isJoinExpression(css.node.value);

          if (isArrayWithJoin) {
            if (style && css) {
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
          } else if (style === null) {
            style = css;
            style.node.name.name = "style";
          } else {
            if (style && css) {
              style.node.value = t.arrayExpression([
                css.node.value.expression,
                style.node.value.expression
              ]);
            }
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
      }
    }
  };
};
