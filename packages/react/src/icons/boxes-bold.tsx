import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoxesIconBold = memo(
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
          d="M11.622 1.074a1 1 0 0 1 .874.058l5 2.857a1 1 0 0 1 .504.868V9.99l4.496 2.57a1 1 0 0 1 .504.869v5.714a1 1 0 0 1-.504.868l-5 2.857a1 1 0 0 1-.992 0L12 20.294l-4.504 2.574a1 1 0 0 1-.992 0l-5-2.857A1 1 0 0 1 1 19.143v-5.714a1 1 0 0 1 .504-.868L6 9.99V4.856a1 1 0 0 1 .504-.868l5-2.857zM3 18.562l3 1.714v-3.41l-3-1.715zm5-1.696v3.41l3-1.714v-3.41zm5 1.696 3 1.714v-3.41l-3-1.715zm5-1.696v3.41l3-1.714v-3.41zM4.015 13.428 7 15.133l2.984-1.705L7 11.723zm10 0L17 15.133l2.984-1.705L17 11.723zM8 9.99l3 1.715V8.294L8 6.58zm5-1.696v3.411l3-1.715V6.58zM9.015 4.856 12 6.563l2.984-1.706L12 3.151z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BoxesIconBold.displayName = "BoxesIconBold";
export { BoxesIconBold };
