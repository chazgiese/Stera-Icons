import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulersIconFilled = memo(
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
          d="M19.75 2A2.25 2.25 0 0 1 22 4.25v3.5A2.25 2.25 0 0 1 19.75 10H19V8a1 1 0 1 0-2 0v2h-2V8a1 1 0 1 0-2 0v2h-3v3H8a1 1 0 1 0 0 2h2v2H8a1 1 0 1 0 0 2h2v.75A2.25 2.25 0 0 1 7.75 22h-3.5A2.25 2.25 0 0 1 2 19.75V4.25A2.25 2.25 0 0 1 4.25 2zM4.25 4a.25.25 0 0 0-.25.25V8h4V4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulersIconFilled.displayName = "RulersIconFilled";
export { RulersIconFilled };
