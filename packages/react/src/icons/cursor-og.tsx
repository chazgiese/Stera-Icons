import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorOgIcon = memo(
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
          d="M6.691 1.767a.75.75 0 0 1 .805.12L20.258 13.13a.75.75 0 0 1-.397 1.307l-4.174.558 2.056 4.549a.75.75 0 0 1-.375.992l-3.645 1.648a.75.75 0 0 1-.993-.375l-2.055-4.55-3.178 2.765a.751.751 0 0 1-1.242-.565L6.25 2.45a.75.75 0 0 1 .441-.683m1.063 16.045 2.697-2.346.07-.054a.75.75 0 0 1 1.106.31l2.161 4.784 2.278-1.03-2.16-4.783a.75.75 0 0 1 .583-1.052l3.541-.475L7.75 4.11z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CursorOgIcon.displayName = "CursorOgIcon";
export { CursorOgIcon };
