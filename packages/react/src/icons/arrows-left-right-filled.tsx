import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsLeftRightIconFilled = memo(
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
          d="M5.793 12.793A1 1 0 0 1 7.5 13.5v3h13a1 1 0 1 1 0 2h-13v3a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1-.28-.546l-.005-.035-.005-.053-.002-.053-.001-.02.001-.02a1 1 0 0 1 .11-.435q.01-.023.023-.044.066-.114.159-.208zM17.117 2.576a1 1 0 0 1 1.09.217l4 4a1 1 0 0 1 .158.207l.006.012a1 1 0 0 1 .129.488 1 1 0 0 1-.145.515 1 1 0 0 1-.148.192l-4 4A1 1 0 0 1 16.5 11.5v-3h-13a1 1 0 0 1 0-2h13v-3a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ArrowsLeftRightIconFilled.displayName = "ArrowsLeftRightIconFilled";
export { ArrowsLeftRightIconFilled };
