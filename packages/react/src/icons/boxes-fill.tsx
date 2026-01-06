import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoxesIconFill = memo(
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
          d="M11.622 1.074a1 1 0 0 1 .874.058l5 2.857a1 1 0 0 1 .504.868V9.99l4.496 2.57a1 1 0 0 1 .504.869v5.714a1 1 0 0 1-.504.868l-4.99 2.851-.004.003q-.06.034-.122.06l-.038.013a1 1 0 0 1-.341.061h-.024a1 1 0 0 1-.292-.053 1 1 0 0 1-.181-.078l-4.506-2.574-4.492 2.568-.004.003q-.06.034-.122.06l-.038.013a1 1 0 0 1-.341.061h-.023a1 1 0 0 1-.293-.053 1 1 0 0 1-.181-.078l-5-2.856A1 1 0 0 1 1 19.144v-5.715a1 1 0 0 1 .389-.793q.021-.016.046-.03.03-.023.063-.043l.005-.002L6 9.99V4.856q0-.08.014-.158a1 1 0 0 1 .375-.634q.022-.016.046-.03.03-.023.063-.043l.005-.003 5-2.857zM8 16.866v3.41l3-1.714v-3.41zm10 0v3.41l3-1.714v-3.41zM4.015 13.428 7 15.133l2.983-1.705-2.985-1.705zm10 0L17 15.133l2.984-1.705L17 11.723zM13 8.294v3.411l3-1.715V6.58zM9.015 4.856 12 6.563l2.984-1.706L12 3.151z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BoxesIconFill.displayName = "BoxesIconFill";
export { BoxesIconFill };
