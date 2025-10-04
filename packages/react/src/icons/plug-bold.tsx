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
          d="M4.935 10.59a2.25 2.25 0 0 1 3.125.056l5.293 5.294a2.25 2.25 0 0 1 .056 3.125l-.143.152-.024.025a6 6 0 0 1-7.719.648l-2.816 2.817a1 1 0 0 1-1.414-1.414l2.817-2.818a6 6 0 0 1 .647-7.718l.026-.024zm1.71 1.47a.25.25 0 0 0-.346-.006l-.127.117a4 4 0 0 0 5.656 5.657l.117-.127a.25.25 0 0 0-.006-.347zM21.293 1.293a1 1 0 1 1 1.414 1.414L19.89 5.524a6 6 0 0 1-.673 7.743l-.153.143c-.886.826-2.268.8-3.125-.056l-.44-.44-.792.793a1 1 0 1 1-1.414-1.414l.793-.793L12.5 9.914l-.793.793a1 1 0 1 1-1.414-1.414l.793-.793-.44-.44a2.25 2.25 0 0 1-.056-3.124l.143-.153q.011-.013.024-.026a6 6 0 0 1 7.719-.647zm-3.465 4.879a4 4 0 0 0-5.656 0l-.118.127a.25.25 0 0 0 .006.347l5.293 5.294a.25.25 0 0 0 .348.005l.127-.117a4 4 0 0 0 0-5.656"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugBold.displayName = "PlugBold";
export { PlugBold };
