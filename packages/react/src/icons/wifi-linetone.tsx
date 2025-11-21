import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiIconLinetone = memo(
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
          d="M12 14.25c1.21 0 2.331.396 3.246 1.07.29.215.314.66.022.96l-2.012 2.07a1.75 1.75 0 0 1-2.51 0l-2.013-2.07c-.292-.3-.268-.745.023-.96A5.45 5.45 0 0 1 12 14.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 9.25c2.546 0 4.88.937 6.692 2.495.29.25.301.704.014 1l-.667.687c-.29.297-.788.309-1.146.026a7.86 7.86 0 0 0-9.785 0c-.357.283-.856.271-1.145-.026l-.667-.687c-.288-.296-.277-.75.013-1a10.23 10.23 0 0 1 6.692-2.495"
        />
        <path
          fill="currentColor"
          d="M12 4.25c3.886 0 7.433 1.49 10.133 3.945.289.263.296.72.01 1.014l-.667.687c-.29.299-.786.307-1.119.015-2.25-1.97-5.168-3.16-8.356-3.161-3.19 0-6.107 1.19-8.357 3.161-.333.292-.828.284-1.119-.015l-.667-.687a.704.704 0 0 1 .01-1.014C4.568 5.74 8.115 4.25 12 4.25"
        />
      </svg>
    ))
);
WifiIconLinetone.displayName = "WifiIconLinetone";
export { WifiIconLinetone };
