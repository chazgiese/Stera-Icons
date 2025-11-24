import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoxesIcon = memo(
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
          d="M11.717 1.306a.75.75 0 0 1 .655.043l5 2.857a.75.75 0 0 1 .378.651v5.279l4.622 2.641a.75.75 0 0 1 .378.652v5.714a.75.75 0 0 1-.378.651l-5 2.857a.75.75 0 0 1-.744 0L12 20.006 7.372 22.65a.75.75 0 0 1-.744 0l-5-2.857a.75.75 0 0 1-.378-.651v-5.714a.75.75 0 0 1 .378-.652l4.622-2.641V4.857a.75.75 0 0 1 .378-.65l5-2.858zM2.75 18.707l3.5 2V16.72l-3.5-2zm5-1.987v3.987l3.5-2v-3.986zm5 1.987 3.5 2V16.72l-3.5-2zm5-1.987v3.987l3.5-2v-3.986zM3.512 13.429 7 15.422l3.487-1.993L7 11.435zm10 0L17 15.422l3.487-1.993L17 11.435zM7.75 10.136l3.5 2V8.148L7.75 6.15zm5-1.988v3.988l3.5-2V6.149zm-4.238-3.29L12 6.85l3.487-1.994L12 2.863z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BoxesIcon.displayName = "BoxesIcon";
export { BoxesIcon };
