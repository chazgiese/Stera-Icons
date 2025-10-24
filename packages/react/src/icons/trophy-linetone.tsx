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
        <g fill="currentColor" opacity={0.32}>
          <path
            fillRule="evenodd"
            d="M14 17a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a4 4 0 0 1 4-4zm-4 2a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2z"
            clipRule="evenodd"
          />
          <path d="M6.5 3.5v2H3.476a.25.25 0 0 0-.248.291l.455 2.723a3 3 0 0 0 1.416 2.079l2.916 1.75a1 1 0 0 1-1.03 1.715l-2.916-1.75a5 5 0 0 1-2.36-3.465L1.257 6.12a2.25 2.25 0 0 1 2.22-2.62zM20.524 3.5a2.25 2.25 0 0 1 2.22 2.62l-.454 2.723a5 5 0 0 1-2.36 3.465l-2.915 1.75-1.03-1.715 2.916-1.75a3 3 0 0 0 1.416-2.08l.454-2.722a.25.25 0 0 0-.247-.291H17.5v-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 1a3.02 3.02 0 0 1 3.015 2.991c.039 4.394-.042 9.101-3.684 14.564l-.296.445h-5.07l-.298-.445C5.526 13.093 5.446 8.385 5.485 3.99A3.02 3.02 0 0 1 8.499 1zm-7 2a1.02 1.02 0 0 0-1.015 1.009c-.037 4.175.048 8.244 3.057 12.991h2.915c3.01-4.748 3.095-8.816 3.058-12.991A1.02 1.02 0 0 0 15.5 3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrophyIconLinetone.displayName = "TrophyIconLinetone";
export { TrophyIconLinetone };
