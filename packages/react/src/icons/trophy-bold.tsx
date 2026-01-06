import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrophyIconBold = memo(
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
          d="M15.5 1a3.02 3.02 0 0 1 2.97 2.5h2.054a2.25 2.25 0 0 1 2.22 2.62l-.454 2.723a5 5 0 0 1-2.36 3.465l-2.735 1.64a21 21 0 0 1-1.601 3.383A4 4 0 0 1 18 21v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a4 4 0 0 1 2.404-3.669 21 21 0 0 1-1.602-3.384l-2.733-1.64A5 5 0 0 1 1.71 8.844L1.256 6.12a2.25 2.25 0 0 1 2.22-2.62H5.53A3.02 3.02 0 0 1 8.5 1zM10 19a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2zM8.5 3a1.02 1.02 0 0 0-1.016 1.009c-.037 4.175.05 8.244 3.058 12.991h2.915c3.009-4.748 3.095-8.816 3.058-12.991A1.02 1.02 0 0 0 15.499 3zM3.475 5.5a.25.25 0 0 0-.247.291l.454 2.723a3 3 0 0 0 1.416 2.079l.901.54C5.592 9.178 5.495 7.31 5.481 5.5zm15.043 0c-.014 1.809-.112 3.677-.52 5.634l.902-.541a3 3 0 0 0 1.416-2.08l.454-2.722a.25.25 0 0 0-.247-.291z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrophyIconBold.displayName = "TrophyIconBold";
export { TrophyIconBold };
