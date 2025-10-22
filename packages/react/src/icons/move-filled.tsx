import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoveIconFilled = memo(
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
          d="M12 1a1 1 0 0 1 .707.293l2.5 2.5A1 1 0 0 1 14.5 5.5h-1.495V11H18.5V9.5a1 1 0 0 1 1.707-.707l2.5 2.5q.092.093.158.207l.006.012A1 1 0 0 1 23 12a1 1 0 0 1-.293.707l-2.5 2.5A1 1 0 0 1 18.5 14.5V13h-5.495v5.5H14.5a1 1 0 0 1 .707 1.707l-2.422 2.42a.997.997 0 0 1-1.487.085l-2.505-2.505A1 1 0 0 1 9.5 18.5h1.505V13H5.5v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1-.066-.073l-.056-.074a1 1 0 0 1-.043-1.048l.006-.012q.066-.114.159-.207l2.5-2.5A1 1 0 0 1 5.5 9.5V11h5.505V5.5H9.5a1 1 0 0 1-.707-1.707l2.5-2.5.073-.066A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
MoveIconFilled.displayName = "MoveIconFilled";
export { MoveIconFilled };
