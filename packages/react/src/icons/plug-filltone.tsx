import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugIconFilltone = memo(
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
          <path d="M5.466 10.098a1.5 1.5 0 0 1 2.082.037l6.319 6.318c.534.535.582 1.378.132 1.968l-.096.116-.636.68-.024.027a6 6 0 1 1-8.46-8.51zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.89 5.525a6 6 0 0 0-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M4.108 18.476a6 6 0 0 0 1.414 1.415l-2.815 2.816a1 1 0 0 1-1.414-1.414zM10.757 4.758a6 6 0 1 1 8.46 8.51l-.683.635a1.5 1.5 0 0 1-2.083-.037l-.952-.952-.792.793a1 1 0 1 1-1.414-1.414l.792-.793-1.586-1.586-.792.793a1 1 0 1 1-1.414-1.414l.792-.793-.95-.95a1.5 1.5 0 0 1-.038-2.083l.636-.683q.011-.014.024-.026"
        />
      </svg>
    ))
);
PlugIconFilltone.displayName = "PlugIconFilltone";
export { PlugIconFilltone };
