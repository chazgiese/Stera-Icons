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
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.616 3.845A10.96 10.96 0 0 1 12 1a10.96 10.96 0 0 1 7 2.515c-2.443 2.017-4 5.07-4 8.485 0 3.416 1.557 6.468 4 8.485A10.96 10.96 0 0 1 12 23c-2.66 0-5.098-.944-7-2.515 2.443-2.017 4-5.07 4-8.485 0-3.416-1.557-6.468-4-8.485q-.196.16-.384.33" />
          <path d="M3.572 4.933A8.98 8.98 0 0 1 7 12a8.98 8.98 0 0 1-3.428 7.066A10.95 10.95 0 0 1 1 12c0-2.691.968-5.156 2.572-7.067M20.427 4.933A10.95 10.95 0 0 1 23 12c0 2.691-.968 5.155-2.573 7.066A8.98 8.98 0 0 1 17 12c0-2.866 1.34-5.42 3.427-7.067" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.428 4.931A11 11 0 0 0 19 3.514c-2.443 2.018-4 5.07-4 8.486s1.557 6.468 4 8.486q.778-.644 1.428-1.417A8.98 8.98 0 0 1 17 12c0-2.867 1.34-5.42 3.428-7.069m-16.857 0Q4.221 4.158 5 3.514C7.443 5.532 9 8.584 9 12s-1.557 6.468-4 8.486a11 11 0 0 1-1.429-1.417A8.98 8.98 0 0 0 7 12C7 9.133 5.66 6.58 3.57 4.931"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 20.486c2.443-2.018 4-5.07 4-8.486S7.443 5.532 5 3.514c-.518.428-.997.903-1.429 1.417A8.98 8.98 0 0 1 7 12c0 2.867-1.34 5.42-3.429 7.069.432.514.91.989 1.429 1.417M19 3.514c-2.443 2.018-4 5.07-4 8.486s1.557 6.468 4 8.486q.778-.644 1.428-1.417A8.98 8.98 0 0 1 17 12c0-2.867 1.34-5.42 3.428-7.069A11 11 0 0 0 19 3.514"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIconFilltone.displayName = "TennisBallIconFilltone";
export { TennisBallIconFilltone };
