import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleAcuteIconBold = memo(
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
          d="M11.134 4.573a1 1 0 0 1 1.732 1L5.732 17.929H20a1 1 0 0 1 0 2H4a1 1 0 0 1-.866-1.5z"
        />
        <path
          fill="currentColor"
          d="M19.586 15.161a1 1 0 0 1 1.157.812l.002.01a1 1 0 0 1-1.97.344l-.002-.009a1 1 0 0 1 .813-1.157M18.695 12.512a1 1 0 0 1 1.282.596l.003.01a1 1 0 0 1-1.88.684l-.002-.008a1 1 0 0 1 .597-1.282M17.355 10.059a1 1 0 0 1 1.367.364l.005.009a1 1 0 0 1-1.732 1l-.004-.007a1 1 0 0 1 .364-1.366M15.61 7.875a1 1 0 0 1 1.41.122l.067.09a1 1 0 0 1-1.593 1.204l-.006-.007a1 1 0 0 1 .122-1.409M13.515 6.026a1 1 0 0 1 1.326-.184l.09.067a1 1 0 1 1-1.293 1.526 1 1 0 0 1-.123-1.409"
        />
      </svg>
    ))
);
AngleAcuteIconBold.displayName = "AngleAcuteIconBold";
export { AngleAcuteIconBold };
