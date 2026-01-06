import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailOpenIconFill = memo(
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
          d="M22 18.001a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.987l.389.278 6.315 4.875c.7.54 1.56.834 2.444.834h1.37c.85 0 1.68-.271 2.366-.774l6.707-4.92.409-.293z"
        />
        <path
          fill="currentColor"
          d="M9.517 2.583a4.2 4.2 0 0 1 4.966 0l5.801 4.253c.44.322.805.722 1.084 1.173l-.95.679-.01.007-6.708 4.919a2 2 0 0 1-1.182.387h-1.37c-.442 0-.872-.146-1.222-.417L3.61 8.71l-.014-.01-.016-.011-.95-.679c.28-.45.646-.85 1.085-1.173z"
        />
      </svg>
    ))
);
MailOpenIconFill.displayName = "MailOpenIconFill";
export { MailOpenIconFill };
