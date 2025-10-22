import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicIconFilled = memo(
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
          d="M18.38 2.256A2.25 2.25 0 0 1 21 4.476V15.5l-.002.02.002.042A4.44 4.44 0 0 1 16.563 20a3.063 3.063 0 0 1-3.063-3.063 4.437 4.437 0 0 1 4.438-4.437c.373 0 .73.07 1.062.192V8.18L9 9.847V17.5l-.002.02.002.042A4.44 4.44 0 0 1 4.563 22 3.063 3.063 0 0 1 1.5 18.937 4.437 4.437 0 0 1 5.938 14.5c.373 0 .73.07 1.062.192V6.06c0-1.1.795-2.038 1.88-2.22z"
        />
        <path
          fill="currentColor"
          d="M18.38 2.258A2.25 2.25 0 0 1 21 4.478v11.024l-.002.02.002.042a4.44 4.44 0 0 1-4.437 4.438 3.063 3.063 0 0 1-3.063-3.063 4.437 4.437 0 0 1 4.438-4.437c.373 0 .73.07 1.062.192V8.182L9 9.849v7.653l-.002.02.002.042a4.44 4.44 0 0 1-4.437 4.438A3.063 3.063 0 0 1 1.5 18.939a4.437 4.437 0 0 1 4.438-4.437c.373 0 .73.07 1.062.192V6.06c0-1.1.795-2.037 1.88-2.218z"
        />
      </svg>
    ))
);
MusicIconFilled.displayName = "MusicIconFilled";
export { MusicIconFilled };
