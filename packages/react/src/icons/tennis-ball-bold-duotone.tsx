import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIconBoldDuotone = memo(
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
          <path d="M6.43 4.933A10.96 10.96 0 0 1 9 12c0 2.69-.967 5.155-2.57 7.065A9 9 0 0 1 5 17.653C6.249 16.108 7 14.143 7 12.001s-.75-4.11-2.002-5.655A9 9 0 0 1 6.43 4.933M17.57 4.933A9 9 0 0 1 19 6.346 8.96 8.96 0 0 0 17 12c0 2.142.75 4.107 2 5.652a9 9 0 0 1-1.432 1.413A10.96 10.96 0 0 1 15 12.001c0-2.69.966-5.157 2.57-7.068" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIconBoldDuotone.displayName = "TennisBallIconBoldDuotone";
export { TennisBallIconBoldDuotone };
