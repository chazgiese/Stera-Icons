import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicIconBold = memo(
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
          d="M18.38 2.256A2.25 2.25 0 0 1 21 4.476V15.5l-.002.02.002.043A4.44 4.44 0 0 1 16.563 20a3.063 3.063 0 0 1-3.063-3.062 4.437 4.437 0 0 1 4.438-4.438c.373 0 .73.07 1.062.193V8.18L9 9.847V17.5l-.002.02.002.043A4.44 4.44 0 0 1 4.563 22 3.063 3.063 0 0 1 1.5 18.938 4.437 4.437 0 0 1 5.938 14.5c.373 0 .73.07 1.062.193V6.059c0-1.1.795-2.038 1.88-2.219zM5.938 16.5A2.437 2.437 0 0 0 3.5 18.938c0 .586.476 1.062 1.063 1.062A2.44 2.44 0 0 0 7 17.563c0-.587-.476-1.063-1.062-1.063m12-2a2.437 2.437 0 0 0-2.438 2.438c0 .586.476 1.062 1.063 1.062A2.44 2.44 0 0 0 19 15.563c0-.587-.476-1.063-1.062-1.063m.771-10.271-9.5 1.584A.25.25 0 0 0 9 6.059v1.76l10-1.666V4.476a.25.25 0 0 0-.291-.247"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.38 2.258A2.25 2.25 0 0 1 21 4.478v11.024l-.002.02.002.042a4.44 4.44 0 0 1-4.437 4.438 3.063 3.063 0 0 1-3.063-3.063 4.437 4.437 0 0 1 4.438-4.437c.373 0 .73.07 1.062.192V8.182L9 9.849v7.653l-.002.02.002.042a4.44 4.44 0 0 1-4.437 4.438A3.063 3.063 0 0 1 1.5 18.939a4.437 4.437 0 0 1 4.438-4.437c.373 0 .73.07 1.062.192V6.06c0-1.1.795-2.037 1.88-2.218zM5.938 16.502A2.437 2.437 0 0 0 3.5 18.939c0 .587.476 1.063 1.063 1.063A2.44 2.44 0 0 0 7 17.564c0-.586-.476-1.062-1.062-1.062m12-2a2.437 2.437 0 0 0-2.438 2.437c0 .587.476 1.063 1.063 1.063A2.44 2.44 0 0 0 19 15.564c0-.586-.476-1.062-1.062-1.062m.771-10.272-9.5 1.584A.25.25 0 0 0 9 6.06v1.761l10-1.667V4.477a.25.25 0 0 0-.291-.247"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MusicIconBold.displayName = "MusicIconBold";
export { MusicIconBold };
