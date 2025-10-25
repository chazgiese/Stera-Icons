import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellOffIconLinetone = memo(
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
            d="M3.18 8.204a1 1 0 0 1 1.96.397C5.049 9.05 5 9.52 5 10v2.446a3 3 0 0 1-.427 1.543l-.898 1.496A1 1 0 0 0 4.533 17h9.212c.264 0 .518.105.706.292l1.82 1.815c.308.307.383.777.185 1.163A5 5 0 0 1 7.101 19H4.533C2.2 19 .76 16.456 1.96 14.456l.898-1.495c.093-.155.142-.334.142-.515V10q.002-.923.18-1.796M9.174 19c.412 1.165 1.52 2 2.826 2 .913 0 1.73-.409 2.28-1.054L13.333 19z"
            clipRule="evenodd"
          />
          <path d="M12 1a9 9 0 0 1 9 9v2.446c0 .181.05.36.143.515l.897 1.495c.594.99.538 2.122.052 2.998a1 1 0 0 1-1.749-.97.98.98 0 0 0-.017-.999l-.898-1.496A3 3 0 0 1 19 12.446V10A7 7 0 0 0 8.13 4.167a1 1 0 0 1-1.11-1.665A8.96 8.96 0 0 1 12 1" />
        </g>
        <path
          fill="currentColor"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
BellOffIconLinetone.displayName = "BellOffIconLinetone";
export { BellOffIconLinetone };
