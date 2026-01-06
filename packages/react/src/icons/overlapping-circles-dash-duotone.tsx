import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCirclesDashIconDuotone = memo(
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
          d="M8.5 4.75a7.2 7.2 0 0 1 3.904 1.14.75.75 0 0 1-.237 1.361.746.746 0 0 0-1.081-1.003 7 7 0 0 0-.479.402 5.75 5.75 0 1 0 0 10.698q.23.213.479.404a.747.747 0 0 0 1.081-1.004.748.748 0 0 1 .237 1.361A7.25 7.25 0 1 1 8.5 4.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.252 17.701a.75.75 0 0 1 .194 1.488 7.3 7.3 0 0 1-1.892 0 .75.75 0 0 1 .194-1.488 5.8 5.8 0 0 0 1.504 0M9.886 15.362a.75.75 0 0 1 1.052.138A5.8 5.8 0 0 0 12 16.563a.75.75 0 0 1-.914 1.189 7.3 7.3 0 0 1-1.338-1.338.75.75 0 0 1 .138-1.052M20.063 15.5a.75.75 0 0 1 1.189.914 7.3 7.3 0 0 1-1.338 1.338.75.75 0 0 1-.914-1.19 5.8 5.8 0 0 0 1.063-1.062M9.152 10.407c.41.054.7.43.647.841a5.8 5.8 0 0 0 0 1.504.75.75 0 0 1-1.487.194 7.3 7.3 0 0 1 0-1.892.75.75 0 0 1 .84-.647M21.848 10.407a.75.75 0 0 1 .84.647 7.3 7.3 0 0 1 0 1.892.75.75 0 0 1-1.487-.194 5.8 5.8 0 0 0 0-1.504.75.75 0 0 1 .647-.84M11.086 6.248A.75.75 0 0 1 12 7.438 5.8 5.8 0 0 0 10.938 8.5a.75.75 0 0 1-1.19-.914 7.3 7.3 0 0 1 1.338-1.338M18.862 6.386a.75.75 0 0 1 1.052-.138c.502.386.952.836 1.338 1.338a.75.75 0 0 1-1.19.914A5.8 5.8 0 0 0 19 7.438a.75.75 0 0 1-.138-1.052M15.5 4.75q.48 0 .946.062a.75.75 0 0 1-.194 1.487 5.8 5.8 0 0 0-1.504 0 .75.75 0 0 1-.194-1.487q.466-.061.946-.062"
        />
      </svg>
    ))
);
OverlappingCirclesDashIconDuotone.displayName =
  "OverlappingCirclesDashIconDuotone";
export { OverlappingCirclesDashIconDuotone };
