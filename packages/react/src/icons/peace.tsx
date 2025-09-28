import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Peace = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25M6.012 19.048a9.2 9.2 0 0 0 5.238 2.169V13.81zm6.738 2.169a9.2 9.2 0 0 0 5.237-2.17L12.75 13.81zm-1.5-18.435c-4.758.382-8.5 4.362-8.5 9.218 0 2.284.83 4.374 2.201 5.987l6.299-6.297zm1.5 8.908 6.298 6.297A9.2 9.2 0 0 0 21.25 12c0-4.856-3.742-8.836-8.5-9.218z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Peace.displayName = "Peace";
export { Peace };
