import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoveIconBold = memo(
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
          d="M12 1a1 1 0 0 1 .707.293l2.5 2.5a1 1 0 1 1-1.414 1.414l-.788-.788V11h6.58l-.792-.793a1 1 0 1 1 1.414-1.414l2.5 2.5q.092.093.158.207l.006.012A1 1 0 0 1 23 12a1 1 0 0 1-.293.707l-2.5 2.5a1 1 0 1 1-1.414-1.414l.793-.793h-6.581v6.581l.788-.788a1 1 0 1 1 1.414 1.414l-2.422 2.42a.997.997 0 0 1-1.487.085l-2.505-2.505a1 1 0 1 1 1.414-1.414l.798.798V13h-6.59l.792.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1-.066-.073l-.056-.074a1 1 0 0 1-.043-1.048l.006-.012q.066-.114.159-.207l2.5-2.5a1 1 0 1 1 1.414 1.414L4.414 11h6.59V4.41l-.797.797a1 1 0 1 1-1.414-1.414l2.5-2.5.073-.066A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
MoveIconBold.displayName = "MoveIconBold";
export { MoveIconBold };
