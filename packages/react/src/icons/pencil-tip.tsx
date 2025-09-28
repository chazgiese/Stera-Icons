import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilTip = memo(
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
          d="M12 1.25a.75.75 0 0 1 .592.29l6.368 8.187c.512.658.79 1.468.79 2.302V22a.75.75 0 0 1-1.5 0v-9.708l-1.386.792a2.75 2.75 0 0 1-2.728 0l-1.386-.792V22a.75.75 0 0 1-1.5 0v-9.708l-1.386.792a2.75 2.75 0 0 1-2.728 0l-1.386-.792V22a.75.75 0 0 1-1.5 0v-9.97c0-.835.278-1.645.79-2.303l6.368-8.188.057-.064A.75.75 0 0 1 12 1.25m2.49 5.172a4.76 4.76 0 0 1-4.98 0l-3.286 4.226a2 2 0 0 0-.096.132l1.752 1.002c.384.22.856.22 1.24 0l1.516-.866a2.75 2.75 0 0 1 2.728 0l1.516.866c.384.22.856.22 1.24 0l1.751-1.002a2 2 0 0 0-.095-.132zm-4.05-1.194c.97.53 2.15.53 3.12 0L12 3.222z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilTip.displayName = "PencilTip";
export { PencilTip };
