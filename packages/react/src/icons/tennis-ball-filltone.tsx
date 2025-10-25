import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.428 4.931A11 11 0 0 0 19 3.514c-2.443 2.018-4 5.07-4 8.486s1.557 6.468 4 8.486q.778-.644 1.428-1.417A8.98 8.98 0 0 1 17 12c0-2.867 1.34-5.42 3.428-7.069m-16.857 0Q4.221 4.158 5 3.514C7.443 5.532 9 8.584 9 12s-1.557 6.468-4 8.486a11 11 0 0 1-1.429-1.417A8.98 8.98 0 0 0 7 12C7 9.133 5.66 6.58 3.57 4.931"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 20.486c2.443-2.018 4-5.07 4-8.486S7.443 5.532 5 3.514c-.518.428-.997.903-1.429 1.417A8.98 8.98 0 0 1 7 12.001c0 2.866-1.34 5.42-3.429 7.068.432.514.91.989 1.429 1.417M19 3.514c-2.443 2.018-4 5.07-4 8.486s1.557 6.468 4 8.486q.778-.644 1.428-1.417A8.98 8.98 0 0 1 17 12c0-2.867 1.34-5.42 3.428-7.069A11 11 0 0 0 19 3.514"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIconFilltone.displayName = "TennisBallIconFilltone";
export { TennisBallIconFilltone };
