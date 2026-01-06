import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlashIcon = memo(
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
          d="M15.88 1.437a.75.75 0 0 1 1.208.793l-2.4 7.482 4.557 1.58a.752.752 0 0 1 .25 1.272l-11.375 10a.75.75 0 0 1-1.21-.793l2.401-7.484-4.556-1.578a.752.752 0 0 1-.25-1.272zM6.462 11.712l4.033 1.398a.75.75 0 0 1 .469.937l-1.796 5.598 8.369-7.358-4.032-1.396a.75.75 0 0 1-.47-.938l1.796-5.598z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlashIcon.displayName = "FlashIcon";
export { FlashIcon };
