import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SwatchBookIconBoldDuotone = memo(
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
          d="M11.998 4.934a3 3 0 0 1 4.194.046l2.83 2.828a3 3 0 0 1 .045 4.194A3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H7A5 5 0 0 0 12 17v-.757l5.606-5.607a1 1 0 0 0 0-1.414l-2.828-2.828a1 1 0 0 0-1.414 0L12 7.758V5zm-.927 15.067H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.929z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7 15.625a1.375 1.375 0 1 1 0 2.75 1.375 1.375 0 0 1 0-2.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 2a3 3 0 0 1 3 3v12a5 5 0 0 1-10 0V5a3 3 0 0 1 3-3zM5 4a1 1 0 0 0-1 1v12a3 3 0 1 0 6 0V5a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SwatchBookIconBoldDuotone.displayName = "SwatchBookIconBoldDuotone";
export { SwatchBookIconBoldDuotone };
