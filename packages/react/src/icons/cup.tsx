import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Cup = memo(
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
          d="M10.5 3.25c2.387 0 4.573.227 6.183.605.798.188 1.496.424 2.013.711.453.252 1.054.707 1.054 1.434q0 .026-.003.053h.001l-.003.04-.004.049-.151 2.11a3.25 3.25 0 0 1-.09 6.498h-.469a7.75 7.75 0 0 1-7.549 6H9.518a7.75 7.75 0 0 1-7.73-7.198l-.53-7.41-.004-.048-.002-.04L1.25 6c0-.727.6-1.182 1.054-1.434.517-.287 1.215-.523 2.013-.71 1.61-.38 3.796-.606 6.183-.606m7.626 4.45c-.42.17-.909.319-1.443.445-1.61.378-3.796.605-6.183.605s-4.573-.227-6.183-.605A10 10 0 0 1 2.873 7.7l.411 5.745a6.25 6.25 0 0 0 6.234 5.805h1.964c3.28 0 6-2.534 6.234-5.805zm1.108 5.55h.266a1.75 1.75 0 0 0 0-3.5h-.016zM10.5 4.75c-2.307 0-4.372.22-5.839.565-.74.174-1.286.371-1.629.562Q2.905 5.95 2.84 6q.066.05.193.123c.343.19.89.388 1.63.562 1.466.345 3.531.565 5.838.565s4.372-.22 5.839-.565c.74-.174 1.286-.371 1.629-.562.086-.048.147-.09.192-.123a2 2 0 0 0-.192-.123c-.343-.19-.89-.388-1.63-.562-1.466-.345-3.531-.565-5.838-.565"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Cup.displayName = "Cup";
export { Cup };
