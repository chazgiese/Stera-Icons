import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugIconBold = memo(
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
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.935 10.59a2.25 2.25 0 0 1 3.125.057l5.293 5.294a2.25 2.25 0 0 1 .056 3.123l-.143.153-.024.026a6 6 0 0 1-7.719.647l-2.816 2.817a1 1 0 0 1-1.414-1.414l2.816-2.817a6 6 0 0 1 .648-7.718l.026-.024zm1.71 1.47a.25.25 0 0 0-.346-.005l-.127.117a4 4 0 1 0 5.656 5.656l.117-.127a.25.25 0 0 0-.006-.346zM21.293 1.293a1 1 0 1 1 1.414 1.414l-2.818 2.818a6 6 0 0 1-.672 7.743l-.153.142a2.25 2.25 0 0 1-3.125-.055l-.44-.44-.792.792a1 1 0 0 1-1.414-1.414l.792-.793-1.586-1.586-.792.793a1 1 0 0 1-1.414-1.414l.792-.793-.439-.44a2.25 2.25 0 0 1-.056-3.123l.143-.154.024-.025a6 6 0 0 1 7.717-.648zm-3.465 4.879a4 4 0 0 0-5.656 0l-.118.127a.25.25 0 0 0 .006.348l4.14 4.14.007.006.006.007 1.14 1.14a.25.25 0 0 0 .348.006l.127-.117a4 4 0 0 0 0-5.657"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugIconBold.displayName = "PlugIconBold";
export { PlugIconBold };
