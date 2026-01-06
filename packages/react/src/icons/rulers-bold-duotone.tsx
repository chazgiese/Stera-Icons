import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulersIconBoldDuotone = memo(
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
          d="M19.75 2A2.25 2.25 0 0 1 22 4.25v3.5A2.25 2.25 0 0 1 19.75 10H10v9.75A2.25 2.25 0 0 1 7.75 22h-3.5A2.25 2.25 0 0 1 2 19.75V10h2v9.75c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V10h2V8h9.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H10V2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8 18H7a1 1 0 1 1 0-2h1zM8 14H7a1 1 0 1 1 0-2h1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 10H2V4a2 2 0 0 1 2-2h6zM4 8h4V4H4z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13 6a1 1 0 0 1 1 1v1h-2V7a1 1 0 0 1 1-1M17 6a1 1 0 0 1 1 1v1h-2V7a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
RulersIconBoldDuotone.displayName = "RulersIconBoldDuotone";
export { RulersIconBoldDuotone };
