import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHorizontal = memo(
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
          d="M2.25 4.859c-.938-1.72.899-3.623 2.65-2.747l16.2 8.1c1.473.737 1.474 2.84 0 3.578l-16.2 8.1c-1.751.875-3.587-1.029-2.65-2.748L6.147 12zm5.195 7.891-3.878 7.11a.5.5 0 0 0 .663.687l15.593-7.797zM4.23 3.454a.5.5 0 0 0-.663.686l3.878 7.11h12.378z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendHorizontal.displayName = "SendHorizontal";
export { SendHorizontal };
