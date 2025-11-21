import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldHalfIconBold = memo(
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
          d="m12.031 1.001.03.001a1 1 0 0 1 .278.058l.013.003 8 3A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-1.366.684-.017.006a1 1 0 0 1-.082.035l-.017.006a1 1 0 0 1-.583.025l-.08-.025-.017-.006a1 1 0 0 1-.082-.035l-.016-.006-1.367-.684A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .648-.937l8-3 .02-.006.034-.012.032-.009q.006 0 .01-.003.124-.032.256-.033zM5 5.693v4.891c0 4.136 2.32 7.917 6 9.795V3.443zm8 14.686c3.68-1.878 6-5.66 6-9.795v-4.89l-6-2.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldHalfIconBold.displayName = "ShieldHalfIconBold";
export { ShieldHalfIconBold };
