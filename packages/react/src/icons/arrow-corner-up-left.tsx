import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpLeftIcon = memo(
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
          d="M21 20.75a.75.75 0 0 0 .75-.75v-8A3.75 3.75 0 0 0 18 8.25H4.81l3.72-3.72a.75.75 0 1 0-1.06-1.06l-5 5-.094.114a1 1 0 0 0-.059.107L2.3 8.74a1 1 0 0 0-.028.091l-.01.041-.005.034a.76.76 0 0 0 .214.625l5 5a.75.75 0 1 0 1.06-1.06L4.81 9.75H18A2.25 2.25 0 0 1 20.25 12v8c0 .414.336.75.75.75"
        />
      </svg>
    ))
);
ArrowCornerUpLeftIcon.displayName = "ArrowCornerUpLeftIcon";
export { ArrowCornerUpLeftIcon };
