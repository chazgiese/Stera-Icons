import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentSearchIconFillDuotone = memo(
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
          d="M15 1.75c.688 0 1.249-.001 1.703.036.463.038.882.12 1.273.318a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.318 1.273.037.454.036 1.015.036 1.703v9.022a4.5 4.5 0 1 0-5.728 5.728H9c-.688 0-1.249.001-1.703-.036-.463-.038-.882-.12-1.273-.319a3.25 3.25 0 0 1-1.42-1.42c-.199-.39-.28-.809-.318-1.272-.037-.454-.036-1.015-.036-1.703v-10c0-.688-.001-1.249.036-1.703.038-.463.12-.882.318-1.273a3.25 3.25 0 0 1 1.42-1.42c.391-.199.81-.28 1.273-.318C7.75 1.75 8.312 1.75 9 1.75zM9 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0-3.5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 12.5a4.5 4.5 0 0 1 3.94 6.673l1.944 1.943a1.25 1.25 0 0 1-1.768 1.768l-1.943-1.944A4.5 4.5 0 1 1 15.5 12.5m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 5.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
DocumentSearchIconFillDuotone.displayName = "DocumentSearchIconFillDuotone";
export { DocumentSearchIconFillDuotone };
