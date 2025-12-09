import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReceiptIconFilled = memo(
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
          d="M19.584 1.376A.75.75 0 0 1 20.75 2v20a.75.75 0 0 1-1.166.624l-2.544-1.696-2.071 1.658a.75.75 0 0 1-.938 0L12 20.961l-2.031 1.625a.75.75 0 0 1-.938 0L6.96 20.928l-2.543 1.696A.75.75 0 0 1 3.25 22V2l.007-.102a.75.75 0 0 1 1.159-.522l2.543 1.695 2.072-1.657.108-.071a.75.75 0 0 1 .83.071L12 3.04l2.031-1.625.108-.071a.75.75 0 0 1 .83.071l2.071 1.657zM8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0-4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0-4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ReceiptIconFilled.displayName = "ReceiptIconFilled";
export { ReceiptIconFilled };
