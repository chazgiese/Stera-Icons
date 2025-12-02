import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonStarIconBold = memo(
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
          d="M9.11 1.426a1 1 0 0 1 .887 1.458 9 9 0 0 0 10.605 12.732q.145-.042.29-.042l.145.01a1 1 0 0 1 .622.35 1 1 0 0 1 .12 1.098 11 11 0 0 1-3.358 3.897A10.94 10.94 0 0 1 12 23.001l-.566-.015a11 11 0 0 1-1.65-.209q-.538-.11-1.055-.271a11.01 11.01 0 0 1-7.672-9.381Q1 12.57 1 12C1 7.03 4.297 2.834 8.82 1.469a1 1 0 0 1 .29-.043m-1.775 2.88a9.03 9.03 0 0 0-3.755 4.51A9 9 0 0 0 12 21.001a8.96 8.96 0 0 0 6.406-2.686l.318-.34q-.359.025-.724.026l-.566-.015a11 11 0 0 1-1.65-.209q-.538-.11-1.056-.271a11.01 11.01 0 0 1-7.671-9.381A11.1 11.1 0 0 1 7.19 4.96q.063-.33.145-.655"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.213 1.943a.3.3 0 0 1 .574 0l.142.467a4 4 0 0 0 2.662 2.662l.466.141a.3.3 0 0 1 0 .575l-.466.141a4 4 0 0 0-2.662 2.662l-.142.466c-.086.283-.488.283-.574 0l-.142-.466A4 4 0 0 0 15.41 5.93l-.467-.141c-.282-.087-.282-.488 0-.575l.467-.141a4 4 0 0 0 2.662-2.662z"
        />
      </svg>
    ))
);
MoonStarIconBold.displayName = "MoonStarIconBold";
export { MoonStarIconBold };
