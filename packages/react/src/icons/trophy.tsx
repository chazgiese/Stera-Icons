import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrophyIcon = memo(
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
          d="M15.5 1.25c1.435 0 2.615 1.1 2.75 2.5h2.274a2 2 0 0 1 1.973 2.33l-.453 2.722a4.75 4.75 0 0 1-2.243 3.292l-2.81 1.684c-.43 1.19-1 2.414-1.76 3.679A3.75 3.75 0 0 1 17.75 21v1a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-1a3.75 3.75 0 0 1 2.518-3.543 21 21 0 0 1-1.76-3.679l-2.81-1.684a4.75 4.75 0 0 1-2.242-3.292l-.453-2.723A2 2 0 0 1 3.475 3.75H5.75a2.77 2.77 0 0 1 2.75-2.5zM10 18.75A2.25 2.25 0 0 0 7.75 21v.25h8.5V21A2.25 2.25 0 0 0 14 18.75zm-1.5-16a1.27 1.27 0 0 0-1.265 1.257c-.037 4.22.05 8.382 3.172 13.243h3.186c3.123-4.861 3.21-9.023 3.172-13.243A1.27 1.27 0 0 0 15.5 2.75zm-5.025 2.5a.5.5 0 0 0-.493.582l.454 2.723a3.25 3.25 0 0 0 1.533 2.253l1.402.84C5.839 9.417 5.739 7.3 5.732 5.25zm14.793 0c-.007 2.05-.109 4.167-.64 6.398l1.402-.84a3.25 3.25 0 0 0 1.533-2.253l.454-2.723a.5.5 0 0 0-.493-.582z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrophyIcon.displayName = "TrophyIcon";
export { TrophyIcon };
