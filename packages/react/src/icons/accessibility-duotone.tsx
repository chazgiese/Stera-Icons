import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AccessibilityIconDuotone = memo(
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
          d="M19.818 6.772a.75.75 0 0 1 .364 1.455c-2.169.543-4.087.89-5.932 1.048v4.65l1.485 7.427a.75.75 0 0 1-1.47.295l-1.26-6.294a.75.75 0 0 0-.735-.603h-.54a.75.75 0 0 0-.736.602l-1.259 6.295a.75.75 0 1 1-1.47-.294l1.485-7.427v-4.65c-1.845-.159-3.763-.506-5.932-1.049a.75.75 0 0 1 .364-1.455c5.88 1.47 9.756 1.47 15.636 0"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 1.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5"
        />
      </svg>
    ))
);
AccessibilityIconDuotone.displayName = "AccessibilityIconDuotone";
export { AccessibilityIconDuotone };
