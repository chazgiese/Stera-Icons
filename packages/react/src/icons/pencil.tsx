import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const Pencil = memo(
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
          d: "M15.793 2.293c.837-.836 1.882-1.084 2.881-.907.96.17 1.843.716 2.533 1.406s1.237 1.574 1.407 2.533c.176 1-.07 2.046-.907 2.882l-3 3.001v-.001l-9 9a1 1 0 0 1-.464.263l-6 1.5a1 1 0 0 1-1.212-1.213l1.5-6 .04-.13q.076-.188.222-.334zM6.327 15.357c-.34-.06-.65-.01-.936.196l-1.018 4.072 4.077-1.02c.202-.284.254-.591.194-.93-.08-.455-.37-.986-.85-1.467-.482-.481-1.013-.771-1.467-.851m8.551-9.01q-.285.043-.544.247a2 2 0 0 0-.128.113l-6.862 6.861c.699.256 1.338.7 1.863 1.225.526.525.967 1.164 1.223 1.861l6.873-6.872c.326-.332.413-.697.34-1.107-.08-.455-.369-.986-.85-1.467s-1.012-.771-1.466-.852a1.256 1.256 0 0 0-.448-.01m3.448-2.992a1.19 1.19 0 0 0-1.119.352l-.862.861c.698.256 1.337.7 1.862 1.225.518.517.955 1.144 1.212 1.83l.011.031.863-.861c.335-.335.424-.705.35-1.12-.08-.454-.368-.985-.85-1.466-.481-.481-1.012-.771-1.466-.852",
          clipRule: "evenodd",
        }),
      }))
);
Pencil.displayName = "Pencil";
export { Pencil };
export default Pencil;
