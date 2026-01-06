import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHIconBoldDuotone = memo(
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
          d="M14 11a1 1 0 1 1 0 2H7.594l.284-.521c.162-.299.163-.66 0-.958L7.594 11z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.03 4.978C.976 3.044 3.041.903 5.012 1.888l16.199 8.1c1.658.829 1.658 3.196 0 4.025l-16.2 8.1c-1.97.984-4.035-1.156-2.98-3.09l3.83-7.024zm1.93-1.33a.27.27 0 0 0-.134.079.27.27 0 0 0-.073.138.23.23 0 0 0 .033.156l4.092 7.5c.162.298.163.66 0 .958l-4.092 7.5a.23.23 0 0 0-.033.157.27.27 0 0 0 .073.138c.043.044.093.07.135.078a.23.23 0 0 0 .157-.028l16.198-8.1a.25.25 0 0 0 0-.447l-16.198-8.1a.23.23 0 0 0-.157-.028"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendHIconBoldDuotone.displayName = "SendHIconBoldDuotone";
export { SendHIconBoldDuotone };
