import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicBold = memo(
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
          d="M18.38 2.756A2.25 2.25 0 0 1 21 4.976V15.5l-.002.02.002.043A4.44 4.44 0 0 1 16.563 20a3.063 3.063 0 0 1-3.063-3.062 4.437 4.437 0 0 1 4.438-4.438c.373 0 .73.07 1.062.193V8.68L9 10.347V17.5l-.002.02.002.043A4.44 4.44 0 0 1 4.563 22 3.063 3.063 0 0 1 1.5 18.938 4.437 4.437 0 0 1 5.938 14.5c.373 0 .73.07 1.062.193V6.559c0-1.1.795-2.038 1.88-2.219zM5.938 16.5A2.437 2.437 0 0 0 3.5 18.938c0 .586.476 1.062 1.063 1.062A2.44 2.44 0 0 0 7 17.563c0-.587-.476-1.063-1.062-1.063m12-2a2.437 2.437 0 0 0-2.438 2.438c0 .586.476 1.062 1.063 1.062A2.44 2.44 0 0 0 19 15.563c0-.587-.476-1.063-1.062-1.063m.771-9.771-9.5 1.584A.25.25 0 0 0 9 6.559v1.76l10-1.667V4.977a.25.25 0 0 0-.291-.247"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MusicBold.displayName = "MusicBold";
export { MusicBold };
