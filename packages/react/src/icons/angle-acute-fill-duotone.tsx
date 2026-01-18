import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleAcuteIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M19.07 13.333a1.5 1.5 0 0 1 1.836 1.062l.003.01a1.5 1.5 0 0 1-2.898.774l-.003-.01a1.5 1.5 0 0 1 1.061-1.836M17.104 9.626a1.5 1.5 0 0 1 2.05.546l.006.01a1.5 1.5 0 0 1-2.598 1.502l-.005-.01a1.5 1.5 0 0 1 .547-2.048M14.248 6.552a1.5 1.5 0 0 1 2.121-.001l.009.008a1.5 1.5 0 0 1-2.122 2.12l-.007-.006a1.5 1.5 0 0 1-.001-2.121" />
        </g>
        <path
          fill="currentColor"
          d="M10.701 4.323a1.5 1.5 0 0 1 2.598 1.5L6.598 17.43H20a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1-1.299-2.25z"
        />
      </svg>
    ))
);
AngleAcuteIconFillDuotone.displayName = "AngleAcuteIconFillDuotone";
export { AngleAcuteIconFillDuotone };
