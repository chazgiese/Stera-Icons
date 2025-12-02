import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckIconFilled = memo(
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
          d="M18.904 4.977a1.5 1.5 0 0 1 2.193 2.046L10.57 18.302c-.096.103-.235.253-.369.374-.143.129-.403.339-.78.45a2 2 0 0 1-1.392-.098 2 2 0 0 1-.71-.554c-.117-.139-.233-.307-.314-.423l-4.233-6.048a1.5 1.5 0 1 1 2.457-1.72l3.738 5.34z"
        />
      </svg>
    ))
);
CheckIconFilled.displayName = "CheckIconFilled";
export { CheckIconFilled };
