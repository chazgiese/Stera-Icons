import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightTopIcon = memo(
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
          d="M18.53 2.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H8.5a7.25 7.25 0 0 0 0 14.5H16a.75.75 0 0 0 0-1.5H8.5a5.75 5.75 0 0 1 0-11.5h11.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.8.8 0 0 0 .117-.157.74.74 0 0 0 .097-.469l-.006-.034q-.003-.02-.01-.04a1 1 0 0 0-.027-.092q-.009-.025-.02-.048a1 1 0 0 0-.057-.106l-.007-.008a1 1 0 0 0-.087-.106z"
        />
        <path
          fill="currentColor"
          d="M18.53 2.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H8.5a7.25 7.25 0 1 0 0 14.5H16a.75.75 0 0 0 0-1.5H8.5a5.75 5.75 0 1 1 0-11.5h11.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.8.8 0 0 0 .117-.157.74.74 0 0 0 .097-.469l-.006-.034q-.003-.02-.01-.041a1 1 0 0 0-.027-.09q-.009-.026-.02-.05a1 1 0 0 0-.057-.105l-.007-.008a1 1 0 0 0-.087-.106z"
        />
      </svg>
    ))
);
ArrowURightTopIcon.displayName = "ArrowURightTopIcon";
export { ArrowURightTopIcon };
