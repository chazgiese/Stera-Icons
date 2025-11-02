import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrophyIconLinetone = memo(
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
          <path d="M15.594 17.331A4 4 0 0 1 18 21v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a4 4 0 0 1 2.404-3.669q.353.606.763 1.224l.297.445H10a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2h.534l.297-.445q.41-.618.763-1.224M20.525 3.5a2.25 2.25 0 0 1 2.22 2.62l-.455 2.723a5 5 0 0 1-2.36 3.465l-2.735 1.64c.352-.96.613-1.896.804-2.814l.902-.541a3 3 0 0 0 1.416-2.08l.455-2.722a.25.25 0 0 0-.247-.291h-2.006q.003-.76-.004-1.509a3 3 0 0 0-.045-.491zM5.53 3.5q-.042.24-.045.491A94 94 0 0 0 5.482 5.5H3.476a.25.25 0 0 0-.247.291l.454 2.723a3 3 0 0 0 1.416 2.079l.901.54c.191.918.45 1.855.802 2.814l-2.733-1.64A5 5 0 0 1 1.71 8.844L1.256 6.12a2.25 2.25 0 0 1 2.22-2.62z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 1a3.02 3.02 0 0 1 3.015 2.991c.04 4.394-.042 9.101-3.683 14.564l-.297.445h-5.07l-.297-.445C5.526 13.093 5.446 8.385 5.485 3.99A3.02 3.02 0 0 1 8.5 1zm-7 2a1.02 1.02 0 0 0-1.015 1.009c-.037 4.175.049 8.244 3.058 12.991h2.915c3.009-4.748 3.094-8.816 3.057-12.991A1.02 1.02 0 0 0 15.5 3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrophyIconLinetone.displayName = "TrophyIconLinetone";
export { TrophyIconLinetone };
