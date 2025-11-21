import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AtSignIcon = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75q0 .543-.053 1.074c-.274 2.766-1.99 4.415-3.91 4.406-1.4-.006-2.607-.884-3.18-2.392a4.75 4.75 0 1 1-.356-6.55V8a.75.75 0 0 1 1.499 0v5c0 2.19 1.149 2.976 2.043 2.98.93.005 2.19-.82 2.411-3.054q.046-.457.046-.926a9.25 9.25 0 1 0-4.626 8.013.751.751 0 0 1 .752 1.298A10.7 10.7 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25m0 7.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AtSignIcon.displayName = "AtSignIcon";
export { AtSignIcon };
