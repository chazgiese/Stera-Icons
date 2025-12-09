import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendVIconBold = memo(
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
          d="M9.988 2.79c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.983 1.97-1.157 4.035-3.09 2.981l-7.024-3.83-7.021 3.83c-1.934 1.055-4.074-1.01-3.09-2.981zm2.236.894a.25.25 0 0 0-.447 0l-8.1 16.198a.23.23 0 0 0-.028.158.27.27 0 0 0 .078.134.27.27 0 0 0 .138.074.23.23 0 0 0 .156-.034L11 16.407V10a1 1 0 1 1 2 0v6.406l6.979 3.808a.23.23 0 0 0 .156.033.27.27 0 0 0 .138-.074.27.27 0 0 0 .078-.134.23.23 0 0 0-.029-.158z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendVIconBold.displayName = "SendVIconBold";
export { SendVIconBold };
