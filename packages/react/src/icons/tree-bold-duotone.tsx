import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeIconBoldDuotone = memo(
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
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2h2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m12.043 1.001.057.004.037.005a1 1 0 0 1 .155.033l.035.012.028.01.043.017.026.012.038.02a1 1 0 0 1 .141.09q.008.003.014.009l.005.004a1 1 0 0 1 .157.157l.008.009L17.23 7.05a1 1 0 0 1-.787 1.617h-.611l3.176 4.049a1 1 0 0 1-.787 1.617h-.611l2.541 3.241c.772.984.071 2.426-1.18 2.426H5.027c-1.25 0-1.951-1.442-1.18-2.426l2.541-3.241h-.611a1 1 0 0 1-.786-1.617l3.176-4.049h-.612a1.001 1.001 0 0 1-.787-1.617l4.445-5.667.024-.03.018-.02q.018-.022.039-.042.014-.014.029-.027l.049-.043.01-.008a1 1 0 0 1 .075-.053l.025-.015a1 1 0 0 1 .29-.119l.027-.005.06-.011.042-.005.055-.004.02-.001h.048zM9.61 6.667h.611a1 1 0 0 1 .787 1.617l-3.176 4.049h.611a1 1 0 0 1 .787 1.617L6.054 18h11.891l-3.177-4.05a1.001 1.001 0 0 1 .787-1.617h.612L12.99 8.284a1 1 0 0 1 .786-1.617h.611L12 3.62z"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
TreeIconBoldDuotone.displayName = "TreeIconBoldDuotone";
export { TreeIconBoldDuotone };
