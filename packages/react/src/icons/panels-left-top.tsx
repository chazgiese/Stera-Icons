import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelsLeftTopIcon = memo(
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
          d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75A2.25 2.25 0 0 0 2.75 7v10A2.25 2.25 0 0 0 5 19.25h2.25V4.75zm3.75 5v9.5H19A2.25 2.25 0 0 0 21.25 17V9.75zm0-1.5h12.5V7A2.25 2.25 0 0 0 19 4.75H8.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelsLeftTopIcon.displayName = "PanelsLeftTopIcon";
export { PanelsLeftTopIcon };
