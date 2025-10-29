import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GlobeIconLinetone = memo(
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
          <path
            fillRule="evenodd"
            d="M12 3c.773 0 1.524.098 2.24.281A15.9 15.9 0 0 1 16.805 11h4.138q.056.492.057 1 0 .508-.057 1h-4.138a15.9 15.9 0 0 1-2.565 7.718 9 9 0 0 1-4.481 0A15.9 15.9 0 0 1 7.195 13H3.057A9 9 0 0 1 3 12q0-.508.057-1h4.138A15.9 15.9 0 0 1 9.76 3.281 9 9 0 0 1 12 3M9.202 13A13.9 13.9 0 0 0 12 20.43 13.9 13.9 0 0 0 14.798 13zM12 3.568A13.9 13.9 0 0 0 9.202 11h5.596A13.9 13.9 0 0 0 12 3.568"
            clipRule="evenodd"
          />
          <path d="m11.954 1.002.003-.001h.005zM12.045 1.002l-.007-.001h.005z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GlobeIconLinetone.displayName = "GlobeIconLinetone";
export { GlobeIconLinetone };
