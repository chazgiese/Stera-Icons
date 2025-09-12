import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const Layers = memo(
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
          d: "M9.48 2.311a5 5 0 0 1 5.039 0l8.134 4.746c1.488.868 1.488 3.018 0 3.886L20.84 12l1.811 1.056c1.489.869 1.489 3.019 0 3.887l-8.133 4.745a5 5 0 0 1-5.038 0l-8.134-4.745c-1.488-.868-1.488-3.018 0-3.887L3.157 12l-1.81-1.057c-1.488-.868-1.488-3.018 0-3.886zm5.039 13.377a5 5 0 0 1-5.038 0l-4.34-2.53-2.786 1.626a.25.25 0 0 0 0 .432l8.134 4.745c.933.545 2.089.545 3.023 0l8.133-4.745a.25.25 0 0 0 0-.432l-2.788-1.627zm-1.007-11.65a3 3 0 0 0-3.024 0L2.356 8.785a.25.25 0 0 0 0 .432l8.134 4.745c.933.544 2.089.545 3.023 0l8.133-4.745a.25.25 0 0 0 0-.432z",
          clipRule: "evenodd",
        }),
      }))
);
Layers.displayName = "Layers";
export { Layers };
export default Layers;
