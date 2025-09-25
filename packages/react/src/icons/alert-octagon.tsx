import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertOctagon = memo(
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
          d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.624 1.25c.53 0 1.04.21 1.415.586l5.125 5.125c.375.375.586.885.586 1.415v7.248c0 .53-.21 1.04-.586 1.415l-5.125 5.125a2 2 0 0 1-1.415.586H8.376c-.53 0-1.04-.21-1.415-.586L1.836 17.04a2 2 0 0 1-.586-1.415V8.376c0-.53.21-1.04.586-1.415L6.96 1.836a2 2 0 0 1 1.415-.586zm-7.248 1.5a.5.5 0 0 0-.354.146L2.896 8.022a.5.5 0 0 0-.146.354v7.248a.5.5 0 0 0 .146.353l5.126 5.127a.5.5 0 0 0 .354.146h7.248a.5.5 0 0 0 .353-.146l5.127-5.126a.5.5 0 0 0 .146-.354V8.376a.5.5 0 0 0-.146-.354l-5.126-5.126a.5.5 0 0 0-.354-.146z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AlertOctagon.displayName = "AlertOctagon";
export { AlertOctagon };
