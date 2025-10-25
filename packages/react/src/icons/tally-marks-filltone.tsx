import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TallyMarksIconFilltone = memo(
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
          <path d="M6 2.5A1.5 1.5 0 0 1 7.5 4v16a1.5 1.5 0 0 1-3 0V4A1.5 1.5 0 0 1 6 2.5M10 2.5A1.5 1.5 0 0 1 11.5 4v16a1.5 1.5 0 0 1-3 0V4A1.5 1.5 0 0 1 10 2.5M14 2.5A1.5 1.5 0 0 1 15.5 4v16a1.5 1.5 0 0 1-3 0V4A1.5 1.5 0 0 1 14 2.5M18 2.5A1.5 1.5 0 0 1 19.5 4v16a1.5 1.5 0 0 1-3 0V4A1.5 1.5 0 0 1 18 2.5" />
        </g>
        <path
          fill="currentColor"
          d="M23.286 5.229a1.5 1.5 0 0 0-2.058-.515l-20 12a1.5 1.5 0 0 0 1.543 2.572l20-11.999a1.5 1.5 0 0 0 .515-2.058"
        />
      </svg>
    ))
);
TallyMarksIconFilltone.displayName = "TallyMarksIconFilltone";
export { TallyMarksIconFilltone };
