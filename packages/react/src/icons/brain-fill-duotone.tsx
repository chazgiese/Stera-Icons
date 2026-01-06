import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrainIconFillDuotone = memo(
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
          <path d="M9.5 1c.527 0 1.03.094 1.5.26V10a2 2 0 0 1-2 2 1 1 0 1 0 0 2 2 2 0 0 1 2 2v6.582A4.964 4.964 0 0 1 9 23a5 5 0 0 1-4.964-4.403 4.998 4.998 0 0 1-1.579-8.122 4.5 4.5 0 0 1 2.736-6.281A4.5 4.5 0 0 1 9.5 1M14.5 1a4.5 4.5 0 0 1 4.305 3.193 4.5 4.5 0 0 1 2.737 6.28 4.997 4.997 0 0 1-1.58 8.123A5 5 0 0 1 13 22.583V16a2 2 0 0 1 2-2 1 1 0 1 0 0-2 2 2 0 0 1-2-2V1.26A4.5 4.5 0 0 1 14.5 1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.76a4.5 4.5 0 0 1 1-.502V10a2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2v6.582a5 5 0 0 1-1-.585 5 5 0 0 1-1 .585V16a2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2V1.258q.535.19 1 .503"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13 10a2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2v6.582a5 5 0 0 1-1-.585 5 5 0 0 1-1 .585V16a2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2V1.258q.535.19 1 .503a4.5 4.5 0 0 1 1-.503z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BrainIconFillDuotone.displayName = "BrainIconFillDuotone";
export { BrainIconFillDuotone };
