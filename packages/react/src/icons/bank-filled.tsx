import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BankIconFilled = memo(
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
          d="M11.575 2.095a1 1 0 0 1 .98.073l9 6A1 1 0 0 1 21 10h-2v7h.5l.153.008A1.5 1.5 0 0 1 21 18.5V20l.103.005A1 1 0 0 1 21 22H3a1 1 0 0 1-.103-1.995L3 20v-1.5A1.5 1.5 0 0 1 4.5 17H5v-7H3a1 1 0 0 1-.555-1.832l9-6zM7 17h2v-7H7zm4 0h2v-7h-2zm4 0h2v-7h-2zM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BankIconFilled.displayName = "BankIconFilled";
export { BankIconFilled };
