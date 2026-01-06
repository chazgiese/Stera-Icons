import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DollarBillIconDuotone = memo(
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
          d="M20 5.25A2.75 2.75 0 0 1 22.75 8v8A2.75 2.75 0 0 1 20 18.75H4A2.75 2.75 0 0 1 1.25 16V8A2.75 2.75 0 0 1 4 5.25zM4 6.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.25 14.78c-.973.074-1.518.299-1.845.625-.326.327-.551.872-.626 1.845h-1.506c.078-1.203.366-2.2 1.072-2.905.705-.706 1.701-.995 2.905-1.072zM2.75 13.273c1.204.077 2.2.366 2.905 1.072.706.705.994 1.702 1.072 2.905H5.22c-.075-.973-.3-1.518-.626-1.845-.327-.326-.872-.551-1.845-.626z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 8.25c1.917 0 3.25 1.813 3.25 3.75s-1.333 3.75-3.25 3.75S8.75 13.937 8.75 12 10.083 8.25 12 8.25m0 1.5c-.844 0-1.75.874-1.75 2.25 0 1.377.906 2.25 1.75 2.25s1.75-.873 1.75-2.25c0-1.376-.906-2.25-1.75-2.25"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6.727 6.75c-.078 1.204-.366 2.2-1.072 2.905-.705.706-1.701.994-2.905 1.072V9.22c.973-.075 1.518-.299 1.845-.625.326-.327.551-.872.626-1.845zM18.78 6.75c.074.973.299 1.518.625 1.845.327.326.872.55 1.845.625v1.507c-1.203-.078-2.2-.366-2.905-1.072-.706-.705-.994-1.701-1.072-2.905z"
        />
      </svg>
    ))
);
DollarBillIconDuotone.displayName = "DollarBillIconDuotone";
export { DollarBillIconDuotone };
