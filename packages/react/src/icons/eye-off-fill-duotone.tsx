import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeOffIconFillDuotone = memo(
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
          <path d="M17.275 18.69A11.3 11.3 0 0 1 12 20c-4.924 0-9.107-3.169-10.926-7.622a1 1 0 0 1 0-.756 12.6 12.6 0 0 1 3.928-5.206zM12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756 12.6 12.6 0 0 1-3.929 5.205L6.724 5.31A11.3 11.3 0 0 1 12 4" />
        </g>
        <path
          fill="currentColor"
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
EyeOffIconFillDuotone.displayName = "EyeOffIconFillDuotone";
export { EyeOffIconFillDuotone };
