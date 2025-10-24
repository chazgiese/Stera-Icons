import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoveIconLinetone = memo(
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
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13.793 18.793a1 1 0 1 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.34.066l-.074-.066-2.5-2.5a1 1 0 1 1 1.414-1.414L12 20.586zM3.793 8.793a1 1 0 1 1 1.414 1.414L3.414 12l1.793 1.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1-.066-1.34l.066-.074zM18.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5.066.073a1 1 0 0 1-.066 1.341l-2.5 2.5a1 1 0 1 1-1.414-1.414L20.586 12l-1.793-1.793a1 1 0 0 1 0-1.414M12 1a1 1 0 0 1 .707.293l2.5 2.5a1 1 0 1 1-1.414 1.414L12 3.414l-1.793 1.793a1 1 0 1 1-1.414-1.414l2.5-2.5.073-.066A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
MoveIconLinetone.displayName = "MoveIconLinetone";
export { MoveIconLinetone };
