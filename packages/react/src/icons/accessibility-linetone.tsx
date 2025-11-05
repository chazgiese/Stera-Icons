import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AccessibilityIconLinetone = memo(
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
          d="M12 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
        <path
          fill="currentColor"
          d="M19.758 7.03a1 1 0 1 1 .484 1.94c-2.091.523-3.954.867-5.742 1.035v4.347a.5.5 0 0 0 .01.097l1.47 7.355.015.1a1 1 0 0 1-1.975.293l-1.259-6.294a.5.5 0 0 0-.403-.395l-.087-.008h-.541a.5.5 0 0 0-.49.403l-1.26 6.294a1 1 0 0 1-1.976-.293l.016-.1 1.47-7.355a.5.5 0 0 0 .01-.097v-4.347c-1.788-.168-3.65-.512-5.742-1.035a1 1 0 1 1 .484-1.94c5.841 1.46 9.675 1.46 15.516 0"
          opacity={0.4}
        />
      </svg>
    ))
);
AccessibilityIconLinetone.displayName = "AccessibilityIconLinetone";
export { AccessibilityIconLinetone };
