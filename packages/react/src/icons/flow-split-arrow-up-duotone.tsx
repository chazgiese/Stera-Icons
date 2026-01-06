import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowUpIconDuotone = memo(
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
          d="M19.75 3.81V9A2.75 2.75 0 0 1 17 11.75h-4.25v3.574a3.8 3.8 0 0 0-1.5 0V11.75H7A2.75 2.75 0 0 1 4.25 9V3.81L5 3.06l.75.75V9c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V3.81l.75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5 1.25c.2 0 .39.08.53.22l3 3a.75.75 0 0 1-1.06 1.06L5 3.06 2.53 5.53a.75.75 0 0 1-1.06-1.06l3-3 .114-.094A.75.75 0 0 1 5 1.25M19 1.25c.2 0 .39.08.53.22l3 3a.75.75 0 0 1-1.06 1.06L19 3.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3 .114-.094A.75.75 0 0 1 19 1.25"
        />
      </svg>
    ))
);
FlowSplitArrowUpIconDuotone.displayName = "FlowSplitArrowUpIconDuotone";
export { FlowSplitArrowUpIconDuotone };
