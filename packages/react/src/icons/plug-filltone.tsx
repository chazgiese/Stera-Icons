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
          <path d="M5.466 10.098a1.5 1.5 0 0 1 2.082.037l6.319 6.317c.534.536.582 1.38.132 1.97l-.096.114-.636.681-.024.027a6 6 0 1 1-8.46-8.51zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.89 5.525a6 6 0 0 0-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M4.109 18.476a6 6 0 0 0 1.414 1.415l-2.816 2.816a1 1 0 0 1-1.414-1.414zM10.757 4.758a6 6 0 1 1 8.46 8.51l-.682.635a1.5 1.5 0 0 1-2.084-.037l-.952-.952-.792.793a1 1 0 1 1-1.414-1.414l.792-.793L12.5 9.914l-.792.793a1 1 0 1 1-1.414-1.414l.792-.793-.95-.95a1.5 1.5 0 0 1-.038-2.083l.637-.683z"
        />
      </svg>
    ))
);
PlugIconFilltone.displayName = "PlugIconFilltone";
export { PlugIconFilltone };
