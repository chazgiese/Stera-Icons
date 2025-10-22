import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M20 7V4.476a1.25 1.25 0 0 0-1.456-1.233l-9.5 1.583A1.25 1.25 0 0 0 8 6.06V9zM14.5 16.938a3.437 3.437 0 0 1 3.438-3.438c1.139 0 2.062.924 2.062 2.063A3.437 3.437 0 0 1 16.563 19a2.06 2.06 0 0 1-2.063-2.062M2.5 18.938A3.437 3.437 0 0 1 5.938 15.5C7.077 15.5 8 16.424 8 17.563A3.437 3.437 0 0 1 4.563 21 2.06 2.06 0 0 1 2.5 18.938" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.38 2.256A2.25 2.25 0 0 1 21 4.476V15.5l-.002.02.002.042A4.44 4.44 0 0 1 16.563 20a3.063 3.063 0 0 1-3.063-3.063 4.437 4.437 0 0 1 4.438-4.437c.373 0 .73.07 1.062.192V8.18L9 9.847V17.5l-.002.02.002.042A4.44 4.44 0 0 1 4.563 22 3.063 3.063 0 0 1 1.5 18.937 4.437 4.437 0 0 1 5.938 14.5c.373 0 .73.07 1.062.192V6.06c0-1.1.795-2.038 1.88-2.22zM5.938 16.5A2.437 2.437 0 0 0 3.5 18.937c0 .587.476 1.063 1.063 1.063A2.44 2.44 0 0 0 7 17.562c0-.586-.476-1.062-1.062-1.062m12-2a2.437 2.437 0 0 0-2.438 2.437c0 .587.476 1.063 1.063 1.063A2.437 2.437 0 0 0 19 15.562c0-.586-.476-1.062-1.062-1.062m.771-10.272-9.5 1.584A.25.25 0 0 0 9 6.06v1.76l10-1.667V4.476a.25.25 0 0 0-.291-.248"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MusicIconFilltone.displayName = "MusicIconFilltone";
export { MusicIconFilltone };
