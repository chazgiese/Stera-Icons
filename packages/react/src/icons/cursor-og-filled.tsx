import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorOgIconFilled = memo(
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
          d="M6.588 1.538A1 1 0 0 1 7.66 1.7l12.762 11.242a1 1 0 0 1-.528 1.74l-3.842.515 1.918 4.243a1 1 0 0 1-.5 1.323l-3.645 1.647a1 1 0 0 1-1.323-.499l-1.918-4.243-2.924 2.544a1.001 1.001 0 0 1-1.656-.754L6 2.45a1 1 0 0 1 .588-.91"
        />
        <path
          fill="currentColor"
          d="M6.588 1.538a1 1 0 0 1 1.073.161L20.423 12.94a1 1 0 0 1-.528 1.741l-3.842.514 1.918 4.243a1 1 0 0 1-.5 1.324l-3.645 1.647a1 1 0 0 1-1.323-.499l-1.918-4.243-2.924 2.544a1.001 1.001 0 0 1-1.656-.754L6 2.449a1 1 0 0 1 .588-.911"
        />
      </svg>
    ))
);
CursorOgIconFilled.displayName = "CursorOgIconFilled";
export { CursorOgIconFilled };
