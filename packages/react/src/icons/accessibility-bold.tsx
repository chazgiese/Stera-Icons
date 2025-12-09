import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AccessibilityIconBold = memo(
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
          d="M19.758 6.53a1 1 0 0 1 .484 1.94c-2.091.523-3.954.867-5.742 1.035v4.346q0 .05.01.098l1.47 7.355.015.101a1 1 0 0 1-1.975.291l-1.259-6.294a.5.5 0 0 0-.403-.394L12.27 15h-.541a.5.5 0 0 0-.49.402l-1.26 6.294a1 1 0 0 1-1.976-.29l.016-.102 1.47-7.355a.5.5 0 0 0 .01-.098V9.506c-1.788-.168-3.65-.512-5.742-1.035a1 1 0 1 1 .484-1.94c5.841 1.46 9.675 1.46 15.516 0"
        />
        <path
          fill="currentColor"
          d="M12 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
      </svg>
    ))
);
AccessibilityIconBold.displayName = "AccessibilityIconBold";
export { AccessibilityIconBold };
