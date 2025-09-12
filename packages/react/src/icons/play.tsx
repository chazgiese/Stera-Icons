const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Play = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) =>
      /*#__PURE__*/ _reactJsxRuntime.jsx("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5.57 1.193c.756-.082 1.495.152 2.252.498.762.347 1.694.88 2.856 1.545l6.525 3.728c1.178.673 2.122 1.212 2.816 1.697.689.483 1.272 1.006 1.586 1.706a4 4 0 0 1 0 3.267c-.314.7-.897 1.223-1.586 1.705-.694.486-1.638 1.024-2.816 1.697l-6.525 3.729c-1.162.664-2.094 1.197-2.856 1.545-.757.345-1.496.58-2.253.498a4 4 0 0 1-2.808-1.63c-.447-.616-.61-1.374-.686-2.203C2 18.14 2 17.067 2 15.729V8.272c0-1.339-.001-2.412.075-3.246.076-.83.24-1.587.686-2.203a4 4 0 0 1 2.808-1.63m.215 1.989a2 2 0 0 0-1.404.814c-.124.172-.247.487-.314 1.212C4.001 5.93 4 6.894 4 8.272v7.457c0 1.377.001 2.342.067 3.063.067.726.19 1.04.314 1.212a2 2 0 0 0 1.404.815c.21.022.545-.027 1.208-.33.659-.3 1.497-.777 2.693-1.46L16.21 15.3c1.212-.693 2.06-1.179 2.661-1.6.606-.423.82-.69.907-.883a2 2 0 0 0 0-1.633c-.086-.194-.301-.46-.907-.884-.6-.42-1.449-.907-2.661-1.6L9.686 4.972C8.49 4.289 7.652 3.812 6.993 3.51c-.663-.302-.997-.352-1.208-.33",
          clipRule: "evenodd",
        }),
      }))
);
Play.displayName = "Play";
export { Play };
export default Play;
