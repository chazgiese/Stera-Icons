import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeOffIconFill = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M15.803 19.338C14.61 19.765 13.333 20 12 20c-4.923 0-9.106-3.169-10.926-7.622a1 1 0 0 1 0-.756 12.7 12.7 0 0 1 2.8-4.213zM12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756 12.7 12.7 0 0 1-2.8 4.212L8.195 4.66A11.3 11.3 0 0 1 12 4.001"
        />
      </svg>
    ))
);
EyeOffIconFill.displayName = "EyeOffIconFill";
export { EyeOffIconFill };
