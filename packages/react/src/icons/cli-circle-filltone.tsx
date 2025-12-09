import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CliCircleIconFilltone = memo(
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
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8.207 7.793a1 1 0 0 0-1.414 1.414L9.586 12l-2.793 2.793a1 1 0 1 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414zM13 14.5a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.793 7.793a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414-1.414L9.586 12 6.793 9.207a1 1 0 0 1 0-1.414M17 14.5a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
CliCircleIconFilltone.displayName = "CliCircleIconFilltone";
export { CliCircleIconFilltone };
