import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BankIconBold = memo(
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
        <path fill="currentColor" d="M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.575 2.095a1 1 0 0 1 .98.073l9 6A1 1 0 0 1 21 10h-2v7.014a2.25 2.25 0 0 1 2 2.236V20l.102.005A1 1 0 0 1 21 22H3a1 1 0 0 1-.103-1.995L3 20v-.75a2.25 2.25 0 0 1 2-2.235V10H3a1 1 0 0 1-.555-1.832l9-6zM5.25 19a.25.25 0 0 0-.25.25V20h14v-.75a.25.25 0 0 0-.2-.245L18.75 19zM7 17h2v-7H7zm4 0h2v-7h-2zm4 0h2v-7h-2zM6.303 8h11.394L12 4.201z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.575 2.095a1 1 0 0 1 .98.073l9 6A1 1 0 0 1 21 10h-2v7.014a2.25 2.25 0 0 1 2 2.236V20l.103.005A1 1 0 0 1 21 22H3a1 1 0 0 1-.103-1.995L3 20v-.75a2.25 2.25 0 0 1 2-2.235V10H3a1 1 0 0 1-.555-1.832l9-6zM5.25 19a.25.25 0 0 0-.25.25V20h14v-.75a.25.25 0 0 0-.2-.245L18.75 19zM7 17h2v-7H7zm4 0h2v-7h-2zm4 0h2v-7h-2zM6.303 8h11.394L12 4.201z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BankIconBold.displayName = "BankIconBold";
export { BankIconBold };
