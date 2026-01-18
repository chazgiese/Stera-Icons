import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoxesIconFill = memo(
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
          d="M11.717 1.306a.75.75 0 0 1 .655.043l5 2.857a.75.75 0 0 1 .378.651v5.279l4.622 2.641a.75.75 0 0 1 .378.652v5.714a.75.75 0 0 1-.378.651l-4.994 2.854-.002.001a.8.8 0 0 1-.182.076l-.04.008a.75.75 0 0 1-.526-.082l-4.629-2.645-4.614 2.638-.008.005a.7.7 0 0 1-.185.076l-.018.003a.75.75 0 0 1-.546-.077l-5-2.857a.75.75 0 0 1-.378-.651v-5.714a.75.75 0 0 1 .075-.325l.014-.029a1 1 0 0 1 .08-.122l.026-.028.034-.036q.018-.018.038-.032a1 1 0 0 1 .11-.08l4.623-2.641V4.857a.75.75 0 0 1 .378-.65l5-2.858zM7.75 16.72v3.987l3.5-2v-3.986zm10 0v3.987l3.5-2v-3.986zM3.512 13.428 7 15.422l3.487-1.993L7 11.435zm10 0L17 15.422l3.487-1.993L17 11.435zm-.762-5.28v3.988l3.5-2V6.149zM8.512 4.856 12 6.851l3.487-1.994L12 2.863z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BoxesIconFill.displayName = "BoxesIconFill";
export { BoxesIconFill };
