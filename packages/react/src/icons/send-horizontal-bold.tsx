import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHorizontalBold = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m4.565 2.782 16.199 8.1c.921.46.921 1.775 0 2.236l-16.199 8.1c-1.095.547-2.243-.642-1.656-1.717L7 12 2.909 4.5c-.586-1.075.561-2.265 1.656-1.718M7 12h14"
        />
      </svg>
    ))
);
SendHorizontalBold.displayName = "SendHorizontalBold";
export { SendHorizontalBold };
