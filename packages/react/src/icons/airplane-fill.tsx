import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AirplaneIconFill = memo(
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
          d="M8.97 3c.646 0 1.253.312 1.628.838L15 10h3.757a3 3 0 0 1 2.122.88l.767.768a.5.5 0 0 1 0 .707l-.767.767a3 3 0 0 1-2.12.878h-3.76l-4.4 6.162A2 2 0 0 1 8.97 21H7.759a.5.5 0 0 1-.46-.697L9.999 14l-4.5-.15-1.14 2.016a1.25 1.25 0 0 1-1.088.634h-.713a.5.5 0 0 1-.497-.556l.439-3.946-.439-3.943a.5.5 0 0 1 .497-.556h.712c.451-.001.867.241 1.09.634L5.5 10.15 10 10 7.299 3.697A.5.5 0 0 1 7.759 3z"
        />
      </svg>
    ))
);
AirplaneIconFill.displayName = "AirplaneIconFill";
export { AirplaneIconFill };
