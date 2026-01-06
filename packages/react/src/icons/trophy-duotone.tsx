import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrophyIconDuotone = memo(
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
          <path d="M15.23 17.457A3.75 3.75 0 0 1 17.75 21v1a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-1a3.75 3.75 0 0 1 2.518-3.543q.285.476.608.959l.222.334H10A2.25 2.25 0 0 0 7.75 21v.25h8.5V21A2.25 2.25 0 0 0 14 18.75h.401l.223-.334q.32-.483.605-.959M5.735 3.993q-.005.625-.003 1.257H3.475a.5.5 0 0 0-.493.582l.454 2.723a3.25 3.25 0 0 0 1.533 2.253l1.402.84c.166.698.375 1.408.636 2.13l-2.81-1.684a4.75 4.75 0 0 1-2.241-3.292l-.453-2.723A2 2 0 0 1 3.475 3.75H5.75q-.013.12-.015.243M20.524 3.75a2 2 0 0 1 1.973 2.33l-.453 2.722a4.75 4.75 0 0 1-2.243 3.292l-2.81 1.684c.261-.722.47-1.432.637-2.13l1.402-.84a3.25 3.25 0 0 0 1.533-2.253l.454-2.723a.5.5 0 0 0-.493-.582h-2.256q.002-.632-.003-1.257-.002-.123-.014-.243z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 1.25a2.77 2.77 0 0 1 2.765 2.743c.04 4.383-.043 9.026-3.641 14.423l-.223.334H9.598l-.222-.334c-3.598-5.397-3.68-10.04-3.641-14.423A2.77 2.77 0 0 1 8.5 1.25zm-7 1.5a1.27 1.27 0 0 0-1.265 1.257c-.037 4.22.05 8.382 3.172 13.243h3.186c3.123-4.861 3.21-9.023 3.172-13.243A1.27 1.27 0 0 0 15.5 2.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrophyIconDuotone.displayName = "TrophyIconDuotone";
export { TrophyIconDuotone };
