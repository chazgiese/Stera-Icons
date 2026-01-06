import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeIconFill = memo(
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
          d="M12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756C21.106 16.83 16.924 20 12 20s-9.107-3.169-10.926-7.622a1 1 0 0 1 0-.756C2.894 7.17 7.076 4 12 4m0 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EyeIconFill.displayName = "EyeIconFill";
export { EyeIconFill };
