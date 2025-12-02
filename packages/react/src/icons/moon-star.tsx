import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonStarIcon = memo(
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
          d="M8.892 1.708a.75.75 0 0 1 .883 1.062 9.25 9.25 0 0 0 10.898 13.086.75.75 0 0 1 .885 1.061A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12c0-4.857 3.221-8.958 7.642-10.292M7.739 3.79A9.25 9.25 0 0 0 12 21.25a9.22 9.22 0 0 0 6.977-3.182l.328-.4c-.428.052-.862.082-1.304.082-5.937 0-10.75-4.813-10.75-10.75 0-.978.131-1.926.377-2.827z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.213 1.943a.3.3 0 0 1 .574 0l.142.466a4 4 0 0 0 2.662 2.663l.466.141a.3.3 0 0 1 0 .574l-.466.142a4 4 0 0 0-2.662 2.662l-.142.466a.3.3 0 0 1-.574 0l-.142-.466A4 4 0 0 0 15.41 5.93l-.467-.142c-.282-.086-.282-.487 0-.574l.467-.141a4 4 0 0 0 2.662-2.663z"
        />
      </svg>
    ))
);
MoonStarIcon.displayName = "MoonStarIcon";
export { MoonStarIcon };
