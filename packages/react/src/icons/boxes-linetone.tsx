import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoxesIconLinetone = memo(
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
          d="M22.496 12.56a1 1 0 0 1 .504.869v5.714a1 1 0 0 1-.504.868l-5 2.857a1 1 0 0 1-.992 0L12 20.294l-4.504 2.574a1 1 0 0 1-.992 0l-5-2.857A1 1 0 0 1 1 19.143v-5.714a1 1 0 0 1 .504-.869L6 9.99v.581a1 1 0 0 0 .504.869l.495.283-2.984 1.705L7 15.133l2.983-1.705 1.52.869a1 1 0 0 0 .993 0l1.52-.87L17 15.134l2.984-1.705L17 11.723l.496-.284a1 1 0 0 0 .504-.868v-.58zM3 18.562l3 1.715v-3.41L3 15.15zm5-1.696v3.411l3-1.715v-3.41zm5 1.697 3 1.714v-3.41l-3-1.715zm5-1.697v3.411l3-1.715v-3.41z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.622 1.074a1 1 0 0 1 .874.058l5 2.857a1 1 0 0 1 .504.868v5.714a1 1 0 0 1-.504.869l-5 2.857a1 1 0 0 1-.992 0l-5-2.857A1 1 0 0 1 6 10.57V4.857a1 1 0 0 1 .504-.868l5-2.857zM8 9.99l3 1.715V8.294L8 6.58zm5-1.696v3.411l3-1.715V6.58zM9.015 4.856 12 6.563l2.984-1.706L12 3.151z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BoxesIconLinetone.displayName = "BoxesIconLinetone";
export { BoxesIconLinetone };
