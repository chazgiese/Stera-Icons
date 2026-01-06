import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideAltIconFillDuotone = memo(
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
          <path d="M22.953 13C22.448 18.606 17.738 23 12 23S1.552 18.606 1.047 13zM12 1c5.738 0 10.448 4.394 10.953 10H1.047C1.552 5.394 6.262 1 12 1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.955 13H1.045a11 11 0 0 1 0-2h21.91a11 11 0 0 1 0 2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideAltIconFillDuotone.displayName = "CircleDivideAltIconFillDuotone";
export { CircleDivideAltIconFillDuotone };
