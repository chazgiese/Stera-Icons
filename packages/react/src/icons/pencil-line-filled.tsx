import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilLineIconFilled = memo(
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
          d="M18.323 10.883 9.708 19.5H21a1 1 0 0 1 0 2H3q-.018-.001-.036-.004l-.04-.004a1 1 0 0 1-.075-.018l-.024-.008a1 1 0 0 1-.076-.037l-.02-.01a.5.5 0 0 1-.225-.37q-.003-.025-.004-.05.001-.02.004-.041v-.008l.5-5 .016-.084a.5.5 0 0 1 .127-.22l9.97-9.97zM16.764 2.03a1.75 1.75 0 0 1 2.474 0l2.733 2.733a1.75 1.75 0 0 1 0 2.475l-2.587 2.585-5.207-5.207z"
        />
      </svg>
    ))
);
PencilLineIconFilled.displayName = "PencilLineIconFilled";
export { PencilLineIconFilled };
