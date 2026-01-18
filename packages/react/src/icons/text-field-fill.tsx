import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextFieldIconFill = memo(
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
          d="M12.6 3c.99 0 1.825.509 2.4 1.214C15.575 3.509 16.41 3 17.4 3h.6a1 1 0 1 1 0 2h-.6c-.277 0-.605.148-.897.537-.293.39-.503.975-.503 1.663v9.6c0 .688.21 1.273.503 1.663.292.39.62.537.897.537h.6a1 1 0 1 1 0 2h-.6c-.99 0-1.825-.51-2.4-1.215-.575.706-1.41 1.215-2.4 1.215H12a1 1 0 1 1 0-2h.6c.277 0 .605-.148.897-.537.293-.39.503-.975.503-1.663V7.2l-.01-.253c-.044-.578-.237-1.069-.493-1.41-.292-.39-.62-.537-.897-.537H12a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          d="M13 16.75H6c-.688 0-1.249.001-1.703-.036-.463-.038-.882-.12-1.273-.319a3.25 3.25 0 0 1-1.42-1.42c-.199-.39-.28-.809-.318-1.272C1.25 13.25 1.25 12.688 1.25 12s-.001-1.249.036-1.703c.038-.463.12-.882.318-1.273a3.25 3.25 0 0 1 1.42-1.42c.391-.199.81-.28 1.273-.318C4.75 7.25 5.312 7.25 6 7.25h7zM18 7.25c.688 0 1.249-.001 1.703.036.463.038.882.12 1.273.318a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.318 1.273.037.454.036 1.015.036 1.703s.001 1.249-.036 1.703c-.038.463-.12.882-.319 1.273a3.25 3.25 0 0 1-1.42 1.42c-.39.199-.809.28-1.272.318-.454.037-1.015.036-1.703.036h-1v-9.5z"
        />
      </svg>
    ))
);
TextFieldIconFill.displayName = "TextFieldIconFill";
export { TextFieldIconFill };
