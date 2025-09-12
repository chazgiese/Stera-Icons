const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const EyeClosedFilled = memo(
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
          d: "M21.318 6.635a1.001 1.001 0 0 1 1.864.729 12 12 0 0 1-2.02 3.384l2.152 2.152a1 1 0 0 1-1.415 1.414l-2.152-2.153a12 12 0 0 1-3.686 2.133l.787 2.936a1 1 0 0 1-1.932.518l-.788-2.939a12.1 12.1 0 0 1-4.258 0l-.787 2.939a1 1 0 1 1-1.932-.518l.787-2.936a12 12 0 0 1-3.686-2.133l-2.151 2.153a1 1 0 0 1-1.414-1.415l2.15-2.151C1.99 9.747 1.303 8.606.818 7.364a1.001 1.001 0 0 1 1.864-.729 10.02 10.02 0 0 0 6.696 6.016l.033.008.019.006a10 10 0 0 0 5.151-.003l.007-.002.009-.003a10.02 10.02 0 0 0 6.721-6.022",
        }),
      }))
);
EyeClosedFilled.displayName = "EyeClosedFilled";
export { EyeClosedFilled };
