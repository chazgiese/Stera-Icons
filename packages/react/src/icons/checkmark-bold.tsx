import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckmarkBold = memo(
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
          d="M19.269 5.317a1.001 1.001 0 0 1 1.462 1.365L10.88 17.238c-.218.234-.426.457-.614.627-.195.175-.45.369-.79.469a2 2 0 0 1-1.39-.098 2.05 2.05 0 0 1-.717-.574c-.163-.194-.337-.445-.52-.707L3.18 11.717a1.001 1.001 0 0 1 1.638-1.148l3.667 5.24c.204.29.321.456.414.567l.013.013.015-.011c.108-.097.246-.244.489-.504z"
        />
      </svg>
    ))
);
CheckmarkBold.displayName = "CheckmarkBold";
export { CheckmarkBold };
