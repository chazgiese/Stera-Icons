import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoveIconFilltone = memo(
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
          d="M12.005 1.005a1 1 0 0 1 1 1V11H22a1 1 0 1 1 0 2h-8.995v9.005a1 1 0 1 1-2 0V13H2a1 1 0 1 1 0-2h9.005V2.005a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14.5 18.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.34.066l-.074-.066-2.5-2.5A1 1 0 0 1 9.5 18.5zM3.793 8.793A1 1 0 0 1 5.5 9.5v5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1-.066-1.34l.066-.074zM19.117 8.576a1 1 0 0 1 1.09.217l2.5 2.5.066.073a1 1 0 0 1-.066 1.341l-2.5 2.5A1 1 0 0 1 18.5 14.5v-5a1 1 0 0 1 .617-.924M12 1a1 1 0 0 1 .707.293l2.5 2.5A1 1 0 0 1 14.5 5.5h-5a1 1 0 0 1-.707-1.707l2.5-2.5.073-.066A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
MoveIconFilltone.displayName = "MoveIconFilltone";
export { MoveIconFilltone };
