import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpLeftIconFillDuotone = memo(
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
          d="M4.222 4.222c4.295-4.296 11.26-4.296 15.556 0 4.296 4.295 4.296 11.26 0 15.556s-11.26 4.296-15.556 0-4.296-11.26 0-15.556m4.243 3.243a1 1 0 0 0-1 1v7.071a1 1 0 0 0 2 0v-4.657l5.363 5.364a1.001 1.001 0 0 0 1.415-1.415l-5.364-5.363h4.656a1 1 0 0 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.243 16.243a1 1 0 0 1-1.415 0l-5.364-5.364v4.657a1 1 0 1 1-2 0V8.465a1 1 0 0 1 1-1h7.071a1 1 0 1 1 0 2H10.88l5.364 5.364a1 1 0 0 1 0 1.414"
        />
      </svg>
    ))
);
ArrowCircleUpLeftIconFillDuotone.displayName =
  "ArrowCircleUpLeftIconFillDuotone";
export { ArrowCircleUpLeftIconFillDuotone };
