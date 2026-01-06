import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicIconDuotone = memo(
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
          stroke="currentColor"
          strokeWidth={1.5}
          d="M2.5 18.938A3.437 3.437 0 0 1 5.938 15.5C7.077 15.5 8 16.423 8 17.563A3.437 3.437 0 0 1 4.563 21 2.06 2.06 0 0 1 2.5 18.938ZM14.5 16.938a3.437 3.437 0 0 1 3.438-3.438c1.139 0 2.062.923 2.062 2.063A3.437 3.437 0 0 1 16.563 19a2.06 2.06 0 0 1-2.063-2.062Z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.42 2.503a2 2 0 0 1 2.33 1.972V15.5l-.002.03a2.81 2.81 0 0 0-1.498-2.454v-5.19l-10.5 1.75V17.5l-.002.03a2.81 2.81 0 0 0-1.498-2.454V6.058a2 2 0 0 1 1.67-1.972zm.248 1.479-9.5 1.583a.5.5 0 0 0-.418.493v2.056l10.5-1.75V4.475a.5.5 0 0 0-.582-.493"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
MusicIconDuotone.displayName = "MusicIconDuotone";
export { MusicIconDuotone };
