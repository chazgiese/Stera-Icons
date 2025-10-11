import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FortressIconBold = memo(
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
          d="M6 8.5a1 1 0 0 1 1 1V11a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1M18 8.5a1 1 0 0 1 1 1V11l-.005.102a1 1 0 0 1-1.99 0L17 11V9.5a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.14 3.01a1 1 0 0 1 .755.543L5.618 5h.764l.723-1.447.072-.121A1 1 0 0 1 8 3h2a1 1 0 0 1 1 1v4h2V4a1 1 0 0 1 1-1h2a1 1 0 0 1 .823.432l.072.12L17.618 5h.764l.723-1.447a1 1 0 0 1 .754-.543L20 3h2a1 1 0 0 1 1 1v15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2v-2a2 2 0 1 0-4 0v2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2V4a1 1 0 0 1 1-1h2zM3 19h5v-2a4 4 0 0 1 8 0v2h5V5h-.382l-.723 1.447A1 1 0 0 1 19 7h-2a1 1 0 0 1-.895-.553L15.382 5H15v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5h-.382l-.723 1.447A1 1 0 0 1 7 7H5a1 1 0 0 1-.895-.553L3.382 5H3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FortressIconBold.displayName = "FortressIconBold";
export { FortressIconBold };
