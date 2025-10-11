import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitCompareIcon = memo(
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
          d="M19 1.75a3.25 3.25 0 0 1 .75 6.411v7.84A3.75 3.75 0 0 1 16 19.75h-3.19l1.72 1.719a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1-.22-.53.8.8 0 0 1 .055-.282l.004-.01q.018-.04.042-.078a.8.8 0 0 1 .119-.16l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16A2.25 2.25 0 0 0 18.25 16V8.161a3.25 3.25 0 0 1 .75-6.41m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M9.47 1.47a.75.75 0 0 1 1.06 0l3 3a.8.8 0 0 1 .114.15q.027.044.048.093a.75.75 0 0 1-.078.715 1 1 0 0 1-.084.102l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H8A2.25 2.25 0 0 0 5.75 8v7.838a3.25 3.25 0 1 1-1.5 0V8A3.75 3.75 0 0 1 8 4.25h3.19L9.47 2.53a.75.75 0 0 1 0-1.06M5 17.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitCompareIcon.displayName = "GitCompareIcon";
export { GitCompareIcon };
