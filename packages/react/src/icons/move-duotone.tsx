import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoveIconDuotone = memo(
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
          d="M13.97 18.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L12 20.94zM3.97 8.97a.75.75 0 1 1 1.06 1.06L3.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zM18.97 8.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L20.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06M12 1.25c.199 0 .39.08.53.22l2.5 2.5a.75.75 0 1 1-1.06 1.06L12 3.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06l2.5-2.5.114-.094A.75.75 0 0 1 12 1.25"
        />
        <path
          fill="currentColor"
          d="M12.755 3.815v7.435h7.434l.75.75-.75.75h-7.434v7.435L12 20.94l-.745-.746V12.75H3.81L3.06 12l.75-.75h7.444V3.806L12 3.06z"
          opacity={0.4}
        />
      </svg>
    ))
);
MoveIconDuotone.displayName = "MoveIconDuotone";
export { MoveIconDuotone };
