import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AirplaneIconFillDuotone = memo(
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
          d="m20.879 13.122.767-.767a.5.5 0 0 0 0-.707l-.767-.768a3 3 0 0 0-2.123-.88H10l-4.5.15-1.14-2.017a1.25 1.25 0 0 0-1.09-.635l-.712.001a.5.5 0 0 0-.496.556l.438 3.943-.438 3.947a.5.5 0 0 0 .497.555h.712c.45 0 .866-.242 1.088-.634L5.5 13.85 10 14h8.758a3 3 0 0 0 2.12-.878"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.598 3.838 15 10h-5L7.3 3.697A.5.5 0 0 1 7.759 3H8.97a2 2 0 0 1 1.627.838M10.598 20.163 15 14h-5L7.3 20.303a.5.5 0 0 0 .46.697H8.97a2 2 0 0 0 1.627-.837"
        />
      </svg>
    ))
);
AirplaneIconFillDuotone.displayName = "AirplaneIconFillDuotone";
export { AirplaneIconFillDuotone };
