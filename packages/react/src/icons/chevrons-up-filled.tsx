import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsUpIconFilled = memo(
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
          d="M12 10.5a1.5 1.5 0 0 1 1.06.44l7 7a1.5 1.5 0 1 1-2.12 2.12L12 14.122l-5.94 5.94a1.5 1.5 0 1 1-2.12-2.122l7-7A1.5 1.5 0 0 1 12 10.5"
        />
        <path
          fill="currentColor"
          d="M12 2.5a1.5 1.5 0 0 1 1.06.44l7 7a1.5 1.5 0 0 1-2.12 2.12L12 6.121l-5.94 5.94a1.5 1.5 0 1 1-2.12-2.122l7-7A1.5 1.5 0 0 1 12 2.5"
        />
      </svg>
    ))
);
ChevronsUpIconFilled.displayName = "ChevronsUpIconFilled";
export { ChevronsUpIconFilled };
