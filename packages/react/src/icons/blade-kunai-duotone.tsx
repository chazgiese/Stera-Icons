import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeKunaiIconDuotone = memo(
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
          d="M11.97 7.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 1.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="m14.5 11.56-.76 4.563a.75.75 0 0 1-.38.535l-11 6a.75.75 0 0 1-1.018-1.017l6-11 .045-.073a.75.75 0 0 1 .49-.308l4.562-.761zm-6.017.12-4.604 8.44 8.44-4.603.768-4.605z"
            clipRule="evenodd"
          />
          <path d="M17.6 5.339c.248.444.616.812 1.06 1.06l-3.6 3.6L14 8.939z" />
        </g>
      </svg>
    ))
);
BladeKunaiIconDuotone.displayName = "BladeKunaiIconDuotone";
export { BladeKunaiIconDuotone };
