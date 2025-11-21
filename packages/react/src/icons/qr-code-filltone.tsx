import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QrCodeIconFilltone = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.4}
        >
          <path d="M8.75 13A2.25 2.25 0 0 1 11 15.25v4.5A2.25 2.25 0 0 1 8.75 22h-4.5A2.25 2.25 0 0 1 2 19.75v-4.5A2.25 2.25 0 0 1 4.25 13zm-4.5 2a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25zM8.75 2A2.25 2.25 0 0 1 11 4.25v4.5A2.25 2.25 0 0 1 8.75 11h-4.5A2.25 2.25 0 0 1 2 8.75v-4.5A2.25 2.25 0 0 1 4.25 2zM6.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M19.75 2A2.25 2.25 0 0 1 22 4.25v4.5A2.25 2.25 0 0 1 19.75 11h-4.5A2.25 2.25 0 0 1 13 8.75v-4.5A2.25 2.25 0 0 1 15.25 2zm-4.5 2a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25z" />
        </g>
        <path
          fill="currentColor"
          d="M16 21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2zM21 19a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2zM19 19h-3v-3h3zM15 13a1 1 0 0 1 1 1v2h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM21 13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2v-2a1 1 0 0 1 1-1zM6.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
QrCodeIconFilltone.displayName = "QrCodeIconFilltone";
export { QrCodeIconFilltone };
