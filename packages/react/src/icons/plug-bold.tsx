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
          d="M4.936 10.591a2.25 2.25 0 0 1 3.125.056l5.293 5.294a2.25 2.25 0 0 1 .055 3.124l-.142.152-.025.026a6 6 0 0 1-7.718.647l-2.817 2.817a1 1 0 0 1-1.414-1.414l2.817-2.817a6 6 0 0 1 .647-7.718l.026-.024zm1.71 1.47a.25.25 0 0 0-.347-.006l-.127.117a4 4 0 1 0 5.656 5.656l.117-.127a.25.25 0 0 0-.005-.346zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.89 5.525a6 6 0 0 1-.672 7.743l-.152.142a2.25 2.25 0 0 1-3.125-.055l-.44-.44-.793.792a1 1 0 0 1-1.414-1.414l.792-.793L12.5 9.914l-.792.793a1 1 0 0 1-1.414-1.414l.792-.793-.438-.44a2.25 2.25 0 0 1-.057-3.123l.144-.154.023-.025a6 6 0 0 1 7.718-.647zm-3.465 4.879a4 4 0 0 0-5.656 0l-.118.127a.25.25 0 0 0 .007.348l4.138 4.14.008.006.006.007 1.14 1.14a.25.25 0 0 0 .348.006l.127-.117a4 4 0 0 0 0-5.657"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugIconBold.displayName = "PlugIconBold";
export { PlugIconBold };
