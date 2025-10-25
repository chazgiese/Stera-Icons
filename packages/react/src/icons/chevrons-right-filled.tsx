import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsRightIconFilled = memo(
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
          d="M3.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12L9.878 12l-5.94-5.94a1.5 1.5 0 0 1 0-2.12"
        />
        <path
          fill="currentColor"
          d="M11.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12L17.878 12l-5.94-5.94a1.5 1.5 0 0 1 0-2.12"
        />
        <path
          fill="currentColor"
          d="M3.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 1 1-2.12-2.12L9.878 12l-5.94-5.94a1.5 1.5 0 0 1 0-2.12"
        />
        <path
          fill="currentColor"
          d="M11.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 1 1-2.12-2.12L17.878 12l-5.94-5.94a1.5 1.5 0 0 1 0-2.12"
        />
      </svg>
    ))
);
ChevronsRightIconFilled.displayName = "ChevronsRightIconFilled";
export { ChevronsRightIconFilled };
