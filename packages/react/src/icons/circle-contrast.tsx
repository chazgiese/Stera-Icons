import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleContrast = memo(
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
          d="M13.09 1.004C18.659 1.513 23 6.252 23 12s-4.342 10.487-9.91 10.996a1 1 0 0 1-.328-.026c-.252.017-.506.03-.762.03-6.075 0-11-4.925-11-11S5.925 1 12 1q.384.002.762.03a1 1 0 0 1 .329-.026M12 3a9 9 0 0 0 0 18z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleContrast.displayName = "CircleContrast";
export { CircleContrast };
