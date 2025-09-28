import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicFilled = memo(
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
          d="M18.67 2.708A2 2 0 0 1 21 4.68V15.5l-.002.02.002.042A4.437 4.437 0 0 1 16.563 20a3.06 3.06 0 0 1-3.063-3.063 4.44 4.44 0 0 1 4.438-4.437c.373 0 .73.07 1.062.192V8.679L9 10.346V17.5l-.002.02.002.042A4.437 4.437 0 0 1 4.563 22 3.06 3.06 0 0 1 1.5 18.937 4.44 4.44 0 0 1 5.938 14.5c.373 0 .73.07 1.062.192V6.346a2 2 0 0 1 1.67-1.972z"
        />
      </svg>
    ))
);
MusicFilled.displayName = "MusicFilled";
export { MusicFilled };
