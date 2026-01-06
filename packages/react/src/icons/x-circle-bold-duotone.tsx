import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XCircleIconBoldDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.793 7.793a1 1 0 0 1 1.414 0l2.796 2.793 2.79-2.786a1 1 0 0 1 1.414 1.415L13.418 12l2.79 2.785a1 1 0 0 1-1.415 1.415l-2.79-2.787-2.796 2.794a1 1 0 0 1-1.414-1.414L10.59 12 7.793 9.207a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
XCircleIconBoldDuotone.displayName = "XCircleIconBoldDuotone";
export { XCircleIconBoldDuotone };
