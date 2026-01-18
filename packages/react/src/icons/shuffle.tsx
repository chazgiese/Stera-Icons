import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShuffleIcon = memo(
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
          d="M6 6.25c1.334 0 2.399.834 3.254 1.821.864.997 1.65 2.31 2.39 3.543.76 1.266 1.474 2.454 2.235 3.332.77.888 1.455 1.304 2.121 1.304h3.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H16c-1.334 0-2.399-.834-3.254-1.821-.864-.997-1.65-2.31-2.39-3.543-.76-1.266-1.474-2.454-2.235-3.332C7.351 8.166 6.666 7.75 6 7.75H3a.75.75 0 0 1 0-1.5zM8.592 14.358a.75.75 0 0 1 1.201.899C8.83 16.545 7.604 17.75 6 17.75H3a.75.75 0 0 1 0-1.5h3c.816 0 1.646-.626 2.592-1.892"
        />
        <path
          fill="currentColor"
          d="M17.97 3.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H16c-.817 0-1.647.627-2.594 1.894a.75.75 0 0 1-1.202-.897c.964-1.29 2.19-2.497 3.796-2.497h3.19l-1.22-1.22a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ShuffleIcon.displayName = "ShuffleIcon";
export { ShuffleIcon };
