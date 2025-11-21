import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHIcon = memo(
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
          d="M2.25 4.859c-.938-1.72.899-3.623 2.65-2.747l16.2 8.1c1.473.737 1.473 2.84 0 3.578l-16.2 8.1c-1.751.875-3.588-1.029-2.65-2.748L6.146 12zm1.98-1.405a.5.5 0 0 0-.663.686l3.878 7.11H14a.75.75 0 0 1 0 1.5H7.445l-3.878 7.11a.5.5 0 0 0 .662.687l16.2-8.1a.5.5 0 0 0 0-.894z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendHIcon.displayName = "SendHIcon";
export { SendHIcon };
