import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideIconFillDuotone = memo(
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
          <path d="M11 22.952C5.394 22.447 1 17.738 1 12S5.394 1.552 11 1.047zM13 1.047C18.606 1.552 23 6.262 23 12s-4.394 10.447-10 10.952z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 22.955V1.045a11 11 0 0 1 2 0v21.91a11 11 0 0 1-2 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideIconFillDuotone.displayName = "CircleDivideIconFillDuotone";
export { CircleDivideIconFillDuotone };
