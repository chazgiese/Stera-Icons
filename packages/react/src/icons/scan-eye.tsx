import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanEyeIcon = memo(
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
          d="M2 17.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 20v-2a.75.75 0 0 1 .75-.75M22 17.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 20 22.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5.75c3.908 0 7.24 2.47 8.692 5.962a.75.75 0 0 1 0 .576C19.24 15.78 15.908 18.25 12 18.25s-7.24-2.47-8.692-5.962a.75.75 0 0 1 0-.576C4.76 8.22 8.092 5.75 12 5.75m0 1.5c-3.143 0-5.883 1.923-7.182 4.75 1.3 2.827 4.04 4.75 7.182 4.75s5.882-1.923 7.18-4.75C17.883 9.173 15.143 7.25 12 7.25"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 1.25a.75.75 0 0 1 0 1.5H4c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V4A2.75 2.75 0 0 1 4 1.25zM20 1.25A2.75 2.75 0 0 1 22.75 4v2a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanEyeIcon.displayName = "ScanEyeIcon";
export { ScanEyeIcon };
