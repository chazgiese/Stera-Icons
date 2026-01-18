import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleAcuteIconDuotone = memo(
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
          <path d="M19.629 15.407a.75.75 0 0 1 .868.61l.002.008a.75.75 0 0 1-1.477.26l-.002-.01a.75.75 0 0 1 .609-.868M18.78 12.746a.75.75 0 0 1 .962.448l.003.01a.75.75 0 0 1-1.41.512l-.002-.008a.75.75 0 0 1 .447-.962M17.48 10.275a.75.75 0 0 1 1.025.273l.005.009a.75.75 0 0 1-1.298.75l-.005-.007a.75.75 0 0 1 .273-1.025M15.772 8.066a.75.75 0 0 1 1.056.092l.006.008a.75.75 0 0 1-1.149.964l-.005-.007a.75.75 0 0 1 .091-1.057M13.706 6.187a.75.75 0 0 1 1.057-.092l.007.006a.75.75 0 0 1-.965 1.148l-.007-.006a.75.75 0 0 1-.092-1.056" />
        </g>
        <path
          fill="currentColor"
          d="M11.35 4.698a.75.75 0 1 1 1.3.75L5.299 18.18H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.65-1.125z"
        />
      </svg>
    ))
);
AngleAcuteIconDuotone.displayName = "AngleAcuteIconDuotone";
export { AngleAcuteIconDuotone };
