import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeKunai = memo(
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
          d="M20 1.25a2.75 2.75 0 1 1-1.34 5.15l-3.6 3.599.97.97a.75.75 0 0 1-1.06 1.061l-.47-.47-.76 4.563a.75.75 0 0 1-.38.535l-11 6a.75.75 0 0 1-1.018-1.017l6-11 .045-.073a.75.75 0 0 1 .49-.308l4.562-.761-.47-.469a.75.75 0 1 1 1.061-1.06l.97.968 3.6-3.6A2.75 2.75 0 0 1 20 1.25M8.483 11.68l-4.604 8.44 8.44-4.603.768-4.605zM20 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BladeKunai.displayName = "BladeKunai";
export { BladeKunai };
