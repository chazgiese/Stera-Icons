import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckFilled = memo(
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
          d="M18.903 4.977a1.5 1.5 0 0 1 2.194 2.046L10.57 18.302c-.097.103-.235.253-.369.374-.144.129-.403.339-.781.45a2 2 0 0 1-1.39-.098 2 2 0 0 1-.712-.554c-.116-.139-.232-.307-.313-.423L2.77 12.003a1.5 1.5 0 1 1 2.457-1.72l3.739 5.34z"
        />
      </svg>
    ))
);
CheckFilled.displayName = "CheckFilled";
export { CheckFilled };
