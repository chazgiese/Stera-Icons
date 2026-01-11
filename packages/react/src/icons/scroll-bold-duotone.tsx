import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrollIconBoldDuotone = memo(
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
          <path
            fillRule="evenodd"
            d="M20.25 15a2.25 2.25 0 0 1 2.25 2.25V18a3 3 0 0 1-3 3h-11v-2a1 1 0 0 0 1-1v-.75A2.25 2.25 0 0 1 11.75 15zm-8.5 2a.25.25 0 0 0-.25.25V18c0 .351-.063.687-.174 1H19.5a1 1 0 0 0 1-1v-.75a.25.25 0 0 0-.25-.25z"
            clipRule="evenodd"
          />
          <path d="M4.5 5a1 1 0 0 0-1 1v2.25c0 .138.112.25.25.25H5.5v2H3.75A2.25 2.25 0 0 1 1.5 8.25V6a3 3 0 0 1 3-3z" />
        </g>
        <path
          fill="currentColor"
          d="M16.5 3a3 3 0 0 1 3 3v9h-2V6a1 1 0 0 0-1-1H7.326c.11.313.174.649.174 1v12a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3V6a1 1 0 0 0-1-1V3z"
        />
      </svg>
    ))
);
ScrollIconBoldDuotone.displayName = "ScrollIconBoldDuotone";
export { ScrollIconBoldDuotone };
