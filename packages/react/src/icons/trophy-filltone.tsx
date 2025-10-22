import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrophyIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M14 18a4 4 0 0 1 4 4 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1 4 4 0 0 1 4-4zM6.5 3.5v2H3.476a.25.25 0 0 0-.247.291l.454 2.723a3 3 0 0 0 1.416 2.079l2.916 1.75a1 1 0 0 1-1.03 1.715l-2.916-1.75A5 5 0 0 1 1.71 8.843L1.256 6.12a2.25 2.25 0 0 1 2.22-2.62zM20.525 3.5a2.25 2.25 0 0 1 2.22 2.62l-.455 2.723a5 5 0 0 1-2.36 3.465l-2.915 1.75-1.03-1.715 2.916-1.75a3 3 0 0 0 1.416-2.08l.455-2.722a.25.25 0 0 0-.247-.291H17.5v-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.481 5.5c.013 1.808.11 3.676.518 5.633.19.917.45 1.855.802 2.814a21.5 21.5 0 0 0 2.104 4.205A4 4 0 0 1 10 18h4q.572.002 1.095.152a21.5 21.5 0 0 0 2.103-4.204c.352-.96.611-1.897.803-2.815.408-1.956.505-3.824.518-5.633q.004-.76-.004-1.509a3.02 3.02 0 0 0-2.861-2.987L15.5 1h-7a3.02 3.02 0 0 0-3.015 2.991A93 93 0 0 0 5.48 5.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrophyIconFilltone.displayName = "TrophyIconFilltone";
export { TrophyIconFilltone };
