import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WrenchIconDuotone = memo(
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
          d="M7.845 11.354q.069.233.154.464a.75.75 0 0 0 1.233.27l-4.927 4.928a1.895 1.895 0 0 0 2.68 2.68l4.927-4.928a.75.75 0 0 1-.173.27.75.75 0 0 0 .443.963q.23.085.463.153l-4.6 4.602a3.395 3.395 0 0 1-4.8-4.8z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.635 4.328a7.1 7.1 0 0 1 6.607-1.9c1.035.237 1.196 1.454.57 2.081l-2.829 2.827.512 2.168 2.167.512 2.829-2.828.124-.108c.608-.462 1.591-.316 1.9.494l.056.184.085.433a7.098 7.098 0 0 1-9.475 7.81.75.75 0 0 1 .522-1.407 5.6 5.6 0 0 0 5.908-1.29 5.59 5.59 0 0 0 1.586-4.702l-2.77 2.77a.75.75 0 0 1-.703.2l-3.024-.715a.75.75 0 0 1-.558-.558l-.714-3.024a.75.75 0 0 1 .199-.703l2.77-2.77a5.597 5.597 0 0 0-5.991 7.495.75.75 0 0 1-1.407.521 7.1 7.1 0 0 1 1.636-7.49"
        />
      </svg>
    ))
);
WrenchIconDuotone.displayName = "WrenchIconDuotone";
export { WrenchIconDuotone };
