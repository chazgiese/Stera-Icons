import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrewdriverIconLinetone = memo(
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
          d="M14.155 3.346a4.595 4.595 0 0 1 6.498 6.498l-3.812 3.813a1 1 0 0 1-.707.293h-.875l-.263 1.315a1 1 0 0 1-.273.51l-1.696 1.696a1 1 0 0 1-1.414 0L6.53 12.387a1 1 0 0 1 0-1.415l1.695-1.695.11-.096c.119-.088.256-.148.401-.177l1.315-.264v-.874a1 1 0 0 1 .293-.707zM19.24 4.76a2.595 2.595 0 0 0-3.67 0l-3.52 3.52v1.28a1 1 0 0 1-.804.981l-1.822.364-.773.774 3.67 3.67.773-.774.365-1.821a1 1 0 0 1 .98-.804h1.282l3.52-3.52a2.595 2.595 0 0 0 0-3.67"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m9.778 15.636-6.071 6.071a1 1 0 0 1-1.414-1.415l6.07-6.071zM16.698 5.888a1 1 0 0 1 1.414 1.414L15.57 9.844a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
ScrewdriverIconLinetone.displayName = "ScrewdriverIconLinetone";
export { ScrewdriverIconLinetone };
