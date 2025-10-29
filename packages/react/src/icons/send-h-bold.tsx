import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHIconBold = memo(
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
          d="M2.03 4.978C.976 3.044 3.041.903 5.012 1.888l16.199 8.1c1.658.829 1.658 3.196 0 4.025l-16.2 8.1c-1.97.984-4.035-1.156-2.98-3.09l3.83-7.024zm1.931-1.33a.27.27 0 0 0-.135.079.27.27 0 0 0-.073.138.23.23 0 0 0 .033.156L7.594 11H14a1 1 0 0 1 0 2H7.594L3.786 19.98a.23.23 0 0 0-.033.156.27.27 0 0 0 .073.138c.043.044.093.07.135.078a.23.23 0 0 0 .157-.028l16.199-8.1a.25.25 0 0 0 0-.447l-16.199-8.1a.23.23 0 0 0-.157-.028"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendHIconBold.displayName = "SendHIconBold";
export { SendHIconBold };
