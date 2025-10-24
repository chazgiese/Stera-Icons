import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenIconFilltone = memo(
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
          d="M13.946 3.93c1.85-.879 4.604-1.41 8.336-.314a1 1 0 0 1 .718.96v13.367a1 1 0 0 1-1.282.96c-3.21-.942-5.414-.234-6.81.644a7.2 7.2 0 0 0-1.577 1.344 6 6 0 0 0-.454.591l-.016.026v.003-.002l.001-.002v-.001a1 1 0 0 1-1.65.11l-.072-.107v.002l-.001-.003-.016-.026-.083-.122a6 6 0 0 0-.371-.47 7.2 7.2 0 0 0-1.576-1.343c-1.397-.878-3.602-1.586-6.81-.644A1.002 1.002 0 0 1 1 17.943V4.576a1 1 0 0 1 .718-.96c3.732-1.096 6.485-.565 8.336.314A8.5 8.5 0 0 1 12 5.198a8.5 8.5 0 0 1 1.946-1.268"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13 21a1 1 0 1 1-2 0V4.452c.403.256.736.515 1 .746.264-.231.597-.49 1-.746z"
        />
      </svg>
    ))
);
BookOpenIconFilltone.displayName = "BookOpenIconFilltone";
export { BookOpenIconFilltone };
