import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIconDuotone = memo(
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
          d="M18 8.25A2.75 2.75 0 0 1 20.75 11v6A2.75 2.75 0 0 1 18 19.75H6A2.75 2.75 0 0 1 3.25 17v-6A2.75 2.75 0 0 1 6 8.25zM6 9.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-6c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.5 6.25a.5.5 0 0 0-.5.5v1.5c-.554 0-1.068.165-1.5.446V6.75a2 2 0 0 1 2-2H9a2 2 0 0 1 2 2v1.5H9.5v-1.5a.5.5 0 0 0-.5-.5zM15 6.25a.5.5 0 0 0-.5.5v1.5H13v-1.5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v1.946A2.74 2.74 0 0 0 18 8.25v-1.5a.5.5 0 0 0-.5-.5z"
        />
      </svg>
    ))
);
ToyBrickIconDuotone.displayName = "ToyBrickIconDuotone";
export { ToyBrickIconDuotone };
