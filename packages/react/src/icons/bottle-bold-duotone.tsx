import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleIconBoldDuotone = memo(
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
          d="m14.586 3.077.364 4.732a1 1 0 0 0 .216.547l1.177 1.471A3 3 0 0 1 17 11.701V20a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-8.299a3 3 0 0 1 .657-1.874l1.177-1.47a1 1 0 0 0 .216-.548l.364-4.732q.006-.066.016-.13.151.051.32.053h1.907a.25.25 0 0 0-.249.23l-.364 4.732a3 3 0 0 1-.649 1.644L9.22 11.077a1 1 0 0 0-.219.624V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8.299a1 1 0 0 0-.219-.624l-1.177-1.47a3 3 0 0 1-.648-1.645l-.364-4.732a.25.25 0 0 0-.25-.23h1.908q.168-.002.32-.054.009.066.016.131"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14.25 1a1 1 0 1 1 0 2h-4.5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
BottleIconBoldDuotone.displayName = "BottleIconBoldDuotone";
export { BottleIconBoldDuotone };
