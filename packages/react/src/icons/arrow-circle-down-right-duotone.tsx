import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownRightIconDuotone = memo(
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
          d="M4.398 4.398C8.596.2 15.403.2 19.601 4.398s4.198 11.005 0 15.203-11.005 4.198-15.203 0S.2 8.596 4.398 4.398m14.143 1.06A9.25 9.25 0 1 0 5.459 18.543 9.25 9.25 0 0 0 18.54 5.46"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.535 7.715a.75.75 0 0 1 .75.75v7.07a.75.75 0 0 1-.75.75h-7.07a.75.75 0 0 1 0-1.5h5.26l-5.79-5.79a.75.75 0 1 1 1.06-1.06l5.79 5.79v-5.26a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ArrowCircleDownRightIconDuotone.displayName = "ArrowCircleDownRightIconDuotone";
export { ArrowCircleDownRightIconDuotone };
