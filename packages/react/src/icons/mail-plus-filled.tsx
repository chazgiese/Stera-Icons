import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailPlusIconFilled = memo(
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
          d="M19 16.25a.75.75 0 0 1 .75.75v1.25H21a.75.75 0 0 1 0 1.5h-1.25V21a.75.75 0 0 1-1.5 0v-1.25H17a.75.75 0 0 1 0-1.5h1.25V17a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.188 8.13a.5.5 0 0 1 .812.39V16a5 5 0 1 1-8.583 5H5a4 4 0 0 1-4-4V8.52a.5.5 0 0 1 .813-.39l7.064 5.652a5 5 0 0 0 6.246 0zM19 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M19 3c1.148 0 2.183.483 2.912 1.258.482.511.292 1.297-.257 1.736l-7.781 6.226a3 3 0 0 1-3.748 0L2.344 5.994c-.549-.439-.738-1.224-.257-1.735A4 4 0 0 1 5 3z"
        />
      </svg>
    ))
);
MailPlusIconFilled.displayName = "MailPlusIconFilled";
export { MailPlusIconFilled };
