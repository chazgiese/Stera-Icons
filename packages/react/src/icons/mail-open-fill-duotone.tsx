import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailOpenIconFillDuotone = memo(
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
          d="M22 17.999a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.987l.389.278 6.315 4.875a4 4 0 0 0 2.444.834h1.37c.85 0 1.68-.271 2.366-.774l6.707-4.92.409-.293z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.512 2.794a4.3 4.3 0 0 1 4.977 0l5.845 4.173a4.14 4.14 0 0 1 1.643 2.473 1 1 0 0 1-.396 1.029l-6.69 4.775c-.689.492-1.52.756-2.368.756h-1.381a4.08 4.08 0 0 1-2.448-.814L2.4 10.456a1 1 0 0 1-.376-1.013 4.13 4.13 0 0 1 1.642-2.476z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailOpenIconFillDuotone.displayName = "MailOpenIconFillDuotone";
export { MailOpenIconFillDuotone };
