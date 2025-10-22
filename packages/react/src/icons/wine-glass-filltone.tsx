import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineGlassIconFilltone = memo(
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
          d="M11 14.93V19a2 2 0 0 1-2 2h6a2 2 0 0 1-2-2v-4.07a7 7 0 0 1-2 0"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.32}>
          <path d="M16 21a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM17.5 1a1 1 0 0 1 .983.817v.003l.002.008.005.027.017.098.06.366A38.69 38.69 0 0 1 19 8a7 7 0 1 1-14.001.001 39 39 0 0 1 .434-5.68q.037-.238.06-.367l.016-.098.005-.027.002-.008v-.003l.02-.088A1 1 0 0 1 6.5 1z" />
        </g>
      </svg>
    ))
);
WineGlassIconFilltone.displayName = "WineGlassIconFilltone";
export { WineGlassIconFilltone };
