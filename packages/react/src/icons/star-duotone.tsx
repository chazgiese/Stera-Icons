import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarIconDuotone = memo(
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
          d="M12 3.026V2l-.001-.75c-.48 0-.98.265-1.21.794L8.42 7.528l-5.972.552C1.3 8.186.827 9.614 1.7 10.38l4.502 3.94-1.316 5.825c-.257 1.133.97 2.004 1.957 1.42L12 18.515v-1.529c-.232 0-.465.062-.672.184l-4.886 2.889 1.25-5.515a1.32 1.32 0 0 0-.418-1.28L3.013 9.535l5.65-.521a1.32 1.32 0 0 0 1.089-.79z"
        />
        <path
          fill="currentColor"
          d="M12 1.25c.48 0 .981.265 1.21.794l2.371 5.484 5.973.552c1.146.106 1.62 1.534.747 2.299l-4.504 3.94 1.317 5.825c.256 1.133-.969 2.004-1.956 1.42L12 18.515v-1.529c.232 0 .465.062.672.184l4.885 2.889-1.247-5.515c-.107-.47.053-.962.416-1.28l4.26-3.729-5.65-.521a1.32 1.32 0 0 1-1.088-.79L12 3.026z"
          opacity={0.4}
        />
      </svg>
    ))
);
StarIconDuotone.displayName = "StarIconDuotone";
export { StarIconDuotone };
