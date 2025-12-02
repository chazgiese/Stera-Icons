import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenTextIconFilltone = memo(
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
          d="M13.946 3.93c1.85-.878 4.604-1.41 8.336-.314a1 1 0 0 1 .718.96v13.367a1 1 0 0 1-1.282.96c-3.21-.942-5.414-.234-6.81.644a7.2 7.2 0 0 0-1.577 1.344 6 6 0 0 0-.454.591l-.016.026v.003-.002l.001-.002v-.001A1 1 0 0 0 13 21V8a1 1 0 1 0-2 0v13c0 .192.055.37.148.523l-.008-.014v.002l-.001-.003-.016-.026-.083-.122a6 6 0 0 0-.371-.47 7.2 7.2 0 0 0-1.576-1.343c-1.397-.878-3.602-1.586-6.81-.644A1 1 0 0 1 1 17.943V4.576a1 1 0 0 1 .718-.96c3.732-1.096 6.485-.564 8.336.314A8.5 8.5 0 0 1 12 5.198a8.5 8.5 0 0 1 1.946-1.268m-6.174 8.108a9.8 9.8 0 0 0-3.34-.328 1 1 0 0 0 .135 1.995 7.8 7.8 0 0 1 2.66.257 1 1 0 1 0 .545-1.924m11.795-.328a9.8 9.8 0 0 0-3.34.328 1 1 0 0 0 .546 1.924 7.8 7.8 0 0 1 2.66-.257 1 1 0 0 0 .134-1.995M7.772 8.353a9.8 9.8 0 0 0-3.34-.329 1.001 1.001 0 0 0 .135 1.997 7.8 7.8 0 0 1 2.66.256 1 1 0 0 0 .545-1.924m11.795-.329a9.8 9.8 0 0 0-3.34.329 1 1 0 0 0 .546 1.924 7.8 7.8 0 0 1 2.66-.256 1 1 0 0 0 .134-1.997"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 7a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M4.433 11.71a9.8 9.8 0 0 1 3.34.328 1 1 0 1 1-.545 1.924 7.8 7.8 0 0 0-2.66-.257 1 1 0 0 1-.135-1.995M16.228 12.038a9.8 9.8 0 0 1 3.34-.328 1 1 0 1 1-.135 1.995 7.8 7.8 0 0 0-2.66.257 1 1 0 0 1-.545-1.924M4.433 8.024a9.8 9.8 0 0 1 3.34.329 1 1 0 0 1-.545 1.924 7.8 7.8 0 0 0-2.66-.256 1.001 1.001 0 0 1-.135-1.997M16.228 8.353a9.8 9.8 0 0 1 3.34-.329 1 1 0 0 1-.135 1.997 7.8 7.8 0 0 0-2.66.256 1 1 0 0 1-.545-1.924"
        />
      </svg>
    ))
);
BookOpenTextIconFilltone.displayName = "BookOpenTextIconFilltone";
export { BookOpenTextIconFilltone };
