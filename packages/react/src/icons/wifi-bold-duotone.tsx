import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiIconBoldDuotone = memo(
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
          d="M12 14.25c1.21 0 2.33.396 3.246 1.07.29.215.314.66.022.96l-2.013 2.07a1.75 1.75 0 0 1-2.51 0l-2.012-2.07c-.292-.3-.269-.745.022-.96A5.45 5.45 0 0 1 12 14.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 9.25c2.546 0 4.879.937 6.692 2.495.29.25.3.704.014 1l-.668.687c-.289.297-.788.309-1.145.026a7.86 7.86 0 0 0-9.785 0c-.358.283-.856.271-1.146-.026l-.667-.687c-.287-.296-.276-.75.014-1A10.23 10.23 0 0 1 12 9.25"
        />
        <path
          fill="currentColor"
          d="M12 4.25c3.886 0 7.433 1.49 10.133 3.945.288.263.296.72.01 1.014l-.667.687c-.291.299-.786.307-1.12.015C18.109 7.941 15.19 6.751 12 6.75S5.893 7.94 3.644 9.911c-.333.292-.828.284-1.12-.015l-.666-.687a.704.704 0 0 1 .01-1.014C4.568 5.74 8.115 4.25 12 4.25"
        />
      </svg>
    ))
);
WifiIconBoldDuotone.displayName = "WifiIconBoldDuotone";
export { WifiIconBoldDuotone };
