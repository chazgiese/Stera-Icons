import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BankIcon = memo(
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
        <path fill="currentColor" d="M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.682 2.321a.75.75 0 0 1 .734.055l9 6A.75.75 0 0 1 21 9.75h-2.25v7.5l.204.01a2 2 0 0 1 1.796 1.99v1H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.25v-1a2 2 0 0 1 1.796-1.99l.204-.01v-7.5H3a.75.75 0 0 1-.416-1.374l9-6zM5.25 18.751a.5.5 0 0 0-.5.5v1h14.5v-1a.5.5 0 0 0-.5-.5zm1.5-1.5h2.5v-7.5h-2.5zm4 0h2.5v-7.5h-2.5zm4 0h2.5v-7.5h-2.5zm-9.273-9h13.046L12 3.9z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.682 2.322a.75.75 0 0 1 .734.054l9 6A.75.75 0 0 1 21 9.75h-2.25v7.5l.204.01a2 2 0 0 1 1.796 1.99v1H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.25v-1a2 2 0 0 1 1.796-1.99l.204-.01v-7.5H3a.75.75 0 0 1-.416-1.374l9-6zM5.25 18.75a.5.5 0 0 0-.5.5v1h14.5v-1a.5.5 0 0 0-.5-.5zm1.5-1.5h2.5v-7.5h-2.5zm4 0h2.5v-7.5h-2.5zm4 0h2.5v-7.5h-2.5zm-9.273-9h13.046L12 3.902z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BankIcon.displayName = "BankIcon";
export { BankIcon };
