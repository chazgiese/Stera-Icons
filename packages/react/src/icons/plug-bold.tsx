import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugBold = memo(
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
          d="M4.936 10.59a2.25 2.25 0 0 1 3.125.056l5.293 5.294a2.25 2.25 0 0 1 .055 3.125l-.142.152-.025.025a6 6 0 0 1-7.718.648l-2.817 2.817a1 1 0 0 1-1.414-1.414l2.818-2.818a6 6 0 0 1 .646-7.718l.026-.024zm1.71 1.47a.25.25 0 0 0-.347-.006l-.127.117a4 4 0 0 0 5.656 5.657l.117-.127a.25.25 0 0 0-.005-.347zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.89 5.524a6 6 0 0 1-.673 7.743l-.152.143c-.887.826-2.269.8-3.125-.056l-.44-.44-.793.793a1 1 0 0 1-1.414-1.414l.793-.793L12.5 9.914l-.793.793a1 1 0 0 1-1.414-1.414l.793-.793-.44-.44a2.25 2.25 0 0 1-.056-3.124l.144-.153.023-.026a6 6 0 0 1 7.719-.647zm-3.465 4.879a4 4 0 0 0-5.656 0l-.118.127a.25.25 0 0 0 .007.347l5.293 5.294a.25.25 0 0 0 .347.005l.127-.117a4 4 0 0 0 0-5.656"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugBold.displayName = "PlugBold";
export { PlugBold };
