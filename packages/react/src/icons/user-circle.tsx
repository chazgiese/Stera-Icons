import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircle = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 14.5a7.24 7.24 0 0 0-6.045 3.248A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 6.044-2.252A7.24 7.24 0 0 0 12 15.75m0-13a9.25 9.25 0 0 0-7.116 15.158 8.77 8.77 0 0 1 4.2-3.16 4.75 4.75 0 1 1 5.831 0 8.77 8.77 0 0 1 4.2 3.16A9.25 9.25 0 0 0 12 2.75m0 5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserCircle.displayName = "UserCircle";
export { UserCircle };
