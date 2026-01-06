import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIconBold = memo(
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
          d="M9.25 4.5a2.25 2.25 0 0 1 2.25 2.25V8h1V6.75a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25v1.654A3 3 0 0 1 21 11v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6c0-1.11.604-2.077 1.5-2.596V6.75A2.25 2.25 0 0 1 6.75 4.5zM6 10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm.75-3.5a.25.25 0 0 0-.25.25V8h3V6.75a.25.25 0 0 0-.25-.25zm8 0a.25.25 0 0 0-.25.25V8h3V6.75a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToyBrickIconBold.displayName = "ToyBrickIconBold";
export { ToyBrickIconBold };
