import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsCurlyCircleIconBold = memo(
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
          d="M9.5 6.5a1 1 0 1 1 0 2H9v1.419A3.2 3.2 0 0 1 8.227 12 3.2 3.2 0 0 1 9 14.081V15.5h.5a1 1 0 1 1 0 2h-.59A1.91 1.91 0 0 1 7 15.59v-1.509c0-.514-.329-.97-.816-1.133a1 1 0 0 1 0-1.896c.487-.163.816-.62.816-1.133v-1.51A1.91 1.91 0 0 1 8.91 6.5zM15.09 6.5A1.91 1.91 0 0 1 17 8.41v1.509c0 .514.329.97.816 1.133a1 1 0 0 1 0 1.896c-.487.163-.816.62-.816 1.133v1.51a1.91 1.91 0 0 1-1.91 1.909h-.59a1 1 0 1 1 0-2h.5v-1.419c0-.783.287-1.515.773-2.081A3.2 3.2 0 0 1 15 9.919V8.5h-.5a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BracketsCurlyCircleIconBold.displayName = "BracketsCurlyCircleIconBold";
export { BracketsCurlyCircleIconBold };
