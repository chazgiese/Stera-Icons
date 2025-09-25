import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleBold = memo(
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
          d="M12.547 1a2.25 2.25 0 0 1 2.249 2.163l.178 4.64a1 1 0 0 0 .218.587l1.15 1.437A3 3 0 0 1 17 11.701V20a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-8.299a3 3 0 0 1 .657-1.874l1.15-1.437a1 1 0 0 0 .22-.586l.177-4.64A2.25 2.25 0 0 1 11.454 1zm-1.094 2a.25.25 0 0 0-.25.24l-.179 4.64a3 3 0 0 1-.655 1.759l-1.15 1.438a1 1 0 0 0-.219.624V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8.299a1 1 0 0 0-.219-.624l-1.15-1.438a3 3 0 0 1-.655-1.76l-.18-4.639a.25.25 0 0 0-.25-.24z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BottleBold.displayName = "BottleBold";
export { BottleBold };
