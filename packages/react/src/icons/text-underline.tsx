import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextUnderlineIcon = memo(
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
          d="M19 21.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5zM18 1.25a.75.75 0 0 1 .75.75v10a6.75 6.75 0 0 1-13.5 0V2a.75.75 0 0 1 1.5 0v10a5.25 5.25 0 1 0 10.5 0V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
TextUnderlineIcon.displayName = "TextUnderlineIcon";
export { TextUnderlineIcon };
