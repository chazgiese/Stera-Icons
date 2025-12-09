import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListExpandIcon = memo(
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
          d="M20.47 14.97a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.061 0l-3-3a.75.75 0 0 1 1.061-1.06L18 17.44zM11 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM11 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM17.999 4.75c.199 0 .39.08.53.22l3.001 3a.75.75 0 0 1-1.06 1.06l-2.471-2.47-2.469 2.47a.75.75 0 0 1-1.06-1.06l2.999-3a.75.75 0 0 1 .53-.22M11 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ListExpandIcon.displayName = "ListExpandIcon";
export { ListExpandIcon };
