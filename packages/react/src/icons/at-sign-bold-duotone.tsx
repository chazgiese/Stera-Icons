import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AtSignIconBoldDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11q0 .555-.055 1.099c-.27 2.714-1.894 4.46-3.864 4.62a1 1 0 1 0-.162-1.993c.746-.061 1.834-.786 2.036-2.825Q21 12.457 21 12a9 9 0 1 0-9 9c1.64 0 3.176-.438 4.499-1.203a1 1 0 0 1 1.002 1.73A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 7a1 1 0 0 1 1 1v5c0 1.107.318 1.81.679 2.209.357.395.805.552 1.24.517a1 1 0 0 1 .162 1.993c-1.064.086-2.117-.32-2.885-1.167a4.2 4.2 0 0 1-.67-1.009A5 5 0 1 1 15 8 1 1 0 0 1 16 7m-4 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AtSignIconBoldDuotone.displayName = "AtSignIconBoldDuotone";
export { AtSignIconBoldDuotone };
