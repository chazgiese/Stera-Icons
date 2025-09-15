import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckTwoFilled = memo(
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
          d="M7.31 12.775a1 1 0 0 1 1.38 1.45l-4.2 4a1 1 0 0 1-1.475-.106l-1.8-2.286a1 1 0 1 1 1.57-1.237l1.12 1.422zM22 14.5a1 1 0 0 1 0 2H11a1 1 0 1 1 0-2zM7.31 5.775a1 1 0 0 1 1.38 1.45l-4.2 4a1 1 0 0 1-1.475-.106l-1.8-2.286a1 1 0 1 1 1.57-1.237l1.12 1.422zM22 7.5a1 1 0 0 1 0 2H11a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ListCheckTwoFilled.displayName = "ListCheckTwoFilled";
export { ListCheckTwoFilled };
