const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const PhoneIncomingFilled = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M6.628 2.513c.317.05.576.23.775.489l.08.116.01.014.01.017 1.52 2.765c.3.54.504.968.615 1.323.113.36.146.691.045 1.006-.099.307-.304.52-.482.686-.209.193-.36.306-.585.532-.185.184-.234.38-.19.63.048.28.216.62.49 1.002.549.769 1.37 1.51 1.925 2.066.556.556 1.297 1.376 2.066 1.926.382.273.722.441 1.002.49.25.043.446-.006.63-.19.226-.226.339-.377.532-.586.165-.178.38-.383.686-.482.315-.101.647-.068 1.006.045.355.111.784.315 1.322.614l2.766 1.522.017.008.014.01c.321.209.547.493.605.856.054.34-.057.66-.195.916-.268.498-.78 1.005-1.183 1.408-1.187 1.187-2.525 1.78-3.975 1.803-1.435.02-2.922-.52-4.423-1.486a24.4 24.4 0 0 1-4.25-3.481 24.5 24.5 0 0 1-3.474-4.243C3.02 10.788 2.48 9.3 2.5 7.866c.022-1.45.616-2.788 1.803-3.975.403-.403.91-.915 1.408-1.183.257-.138.575-.249.916-.195",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M19.793 2.793a1 1 0 0 1 1.414 1.414L16.414 9H20a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v3.586z",
          }),
        ],
      }))
);
PhoneIncomingFilled.displayName = "PhoneIncomingFilled";
export { PhoneIncomingFilled };
