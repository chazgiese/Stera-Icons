import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AccessibilityIcon = memo(
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
          d="M19.818 7.272a.75.75 0 0 1 .364 1.456c-2.169.542-4.087.89-5.932 1.047v4.65l1.485 7.427a.75.75 0 0 1-1.47.296l-1.261-6.302a.75.75 0 0 0-.733-.596h-.542a.75.75 0 0 0-.734.596l-1.26 6.302a.75.75 0 0 1-1.47-.296l1.485-7.426v-4.65c-1.845-.159-3.763-.506-5.932-1.048a.75.75 0 0 1 .364-1.456c5.88 1.47 9.756 1.47 15.636 0M12 2.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5"
        />
      </svg>
    ))
);
AccessibilityIcon.displayName = "AccessibilityIcon";
export { AccessibilityIcon };
