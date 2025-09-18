import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHorizontalBold = memo(
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
          d="M2.03 4.978C.976 3.044 3.041.903 5.012 1.888l16.199 8.1c1.658.829 1.658 3.196 0 4.025l-16.2 8.1c-1.97.984-4.035-1.156-2.98-3.09l3.83-7.024zM7.594 13l-3.808 6.98a.23.23 0 0 0-.033.156.27.27 0 0 0 .073.138c.043.044.093.07.135.078a.23.23 0 0 0 .157-.028L18.764 13zM3.96 3.65a.27.27 0 0 0-.135.078.27.27 0 0 0-.073.138.23.23 0 0 0 .033.156L7.594 11h11.17L4.118 3.676a.23.23 0 0 0-.157-.028"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendHorizontalBold.displayName = "SendHorizontalBold";
export { SendHorizontalBold };
