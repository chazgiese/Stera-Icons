import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideHorizontal = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m-9.217 11.5c.382 4.758 4.36 8.5 9.217 8.5 4.856 0 8.835-3.742 9.217-8.5zM12 2.75c-4.856 0-8.835 3.742-9.217 8.5h18.434c-.382-4.758-4.36-8.5-9.217-8.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideHorizontal.displayName = "CircleDivideHorizontal";
export { CircleDivideHorizontal };
