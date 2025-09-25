import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckCircle = memo(
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
          d="M16.47 8.47a.75.75 0 1 1 1.06 1.06l-6.347 6.348c-.104.103-.214.215-.317.3a1.3 1.3 0 0 1-.476.265 1.25 1.25 0 0 1-.838-.06 1.3 1.3 0 0 1-.435-.328c-.09-.1-.183-.226-.27-.343L6.4 12.45a.75.75 0 0 1 1.2-.9l2.447 3.262.034.045.041-.04z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CheckCircle.displayName = "CheckCircle";
export { CheckCircle };
