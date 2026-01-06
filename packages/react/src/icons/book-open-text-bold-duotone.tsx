import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenTextIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M13.946 3.93c1.85-.879 4.604-1.41 8.336-.314a1 1 0 0 1 .718.96v13.367a1 1 0 0 1-1.282.96c-3.268-.96-5.515-.464-6.914.2a6.4 6.4 0 0 0-1.555 1.028 4.5 4.5 0 0 0-.433.448l-.008.01h-.001a1 1 0 0 1-1.615 0q-.004-.003-.008-.01l-.077-.09a5 5 0 0 0-.356-.358 6.4 6.4 0 0 0-1.555-1.027c-1.4-.665-3.646-1.16-6.914-.2A1.002 1.002 0 0 1 1 17.943V4.575a1 1 0 0 1 .718-.96c3.732-1.096 6.485-.565 8.336.314A8.5 8.5 0 0 1 12 5.198a8.5 8.5 0 0 1 1.946-1.268m-4.75 1.806C7.902 5.122 5.882 4.652 3 5.345v11.317c3.088-.643 5.422-.14 7.054.635.35.166.665.344.946.522V7.005a5 5 0 0 0-.249-.241 6.4 6.4 0 0 0-1.555-1.028M21 5.345c-2.882-.693-4.902-.223-6.196.391a6.4 6.4 0 0 0-1.555 1.028q-.15.136-.249.24V17.82c.28-.178.596-.356.946-.522 1.632-.775 3.966-1.278 7.054-.635zm-8.196 1.883.002-.002v-.002l.002-.001-.001-.001z"
            clipRule="evenodd"
          />
          <path d="m11.192 20.589.002.004z" />
        </g>
        <path
          fill="currentColor"
          d="M5.432 11.71a9.8 9.8 0 0 1 3.34.328 1 1 0 0 1-.545 1.924 7.8 7.8 0 0 0-2.66-.257 1 1 0 0 1-.135-1.995M15.227 12.038a9.8 9.8 0 0 1 3.34-.328 1 1 0 0 1-.135 1.995 7.8 7.8 0 0 0-2.66.257 1 1 0 0 1-.545-1.924M5.432 8.024a9.8 9.8 0 0 1 3.34.328 1 1 0 0 1-.545 1.925 7.8 7.8 0 0 0-2.66-.257 1.001 1.001 0 0 1-.135-1.996M15.227 8.352a9.8 9.8 0 0 1 3.34-.328 1.001 1.001 0 0 1-.135 1.996 7.8 7.8 0 0 0-2.66.257 1 1 0 0 1-.545-1.925"
        />
      </svg>
    ))
);
BookOpenTextIconBoldDuotone.displayName = "BookOpenTextIconBoldDuotone";
export { BookOpenTextIconBoldDuotone };
