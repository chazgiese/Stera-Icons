import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MatchaIconLinetone = memo(
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
          d="M20.33 11.023C21.834 11.96 23 13.313 23 15c0 1.963-1.566 3.472-3.481 4.43C17.543 20.418 14.883 21 12 21s-5.543-.582-7.519-1.57C2.566 18.472 1 16.963 1 15c0-1.686 1.166-3.04 2.67-3.977l1.058 1.697C3.48 13.496 3 14.318 3 15c0 .798.673 1.789 2.376 2.64C7.019 18.463 9.36 19 12 19s4.98-.538 6.624-1.36C20.327 16.79 21 15.799 21 15c0-.682-.48-1.504-1.727-2.28z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3c2.55 0 4.894.286 6.632.769.862.239 1.632.543 2.21.922C21.379 5.044 22 5.634 22 6.5q0 .162-.027.312l-.225 2.13A9 9 0 0 1 12.798 17h-1.596a9 9 0 0 1-8.95-8.058l-.225-2.13A2 2 0 0 1 2 6.5c0-.866.621-1.456 1.158-1.809.578-.38 1.348-.683 2.21-.922C7.106 3.286 9.451 3 12 3m7.742 5.861a11 11 0 0 1-1.11.37C16.894 9.714 14.549 10 12 10c-2.55 0-4.894-.286-6.632-.769-.393-.109-.766-.233-1.111-.37A7 7 0 0 0 11.202 15h1.596a7 7 0 0 0 6.944-6.139M12 5c-2.421 0-4.578.273-6.097.695-.766.213-1.314.449-1.647.667a2 2 0 0 0-.183.138q.06.055.183.138c.333.218.88.454 1.647.667C7.423 7.727 9.58 8 12 8s4.578-.273 6.097-.695c.766-.213 1.314-.449 1.647-.667.083-.055.14-.102.182-.138a2 2 0 0 0-.182-.138c-.333-.218-.88-.454-1.647-.667C16.577 5.273 14.42 5 12 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MatchaIconLinetone.displayName = "MatchaIconLinetone";
export { MatchaIconLinetone };
