import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignHorizontalLeftIconFilled = memo(
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
          d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M13 13c.334 0 .644 0 .902.02.237.02.496.06.757.172l.112.053.156.087c.352.216.64.526.828.896.152.299.202.6.224.87.022.258.021.568.021.902s0 .644-.02.902a2.3 2.3 0 0 1-.225.87c-.216.423-.56.767-.984.983a2.3 2.3 0 0 1-.869.225c-.258.02-.568.02-.902.02H9c-.334 0-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225 2.25 2.25 0 0 1-.983-.983 2.3 2.3 0 0 1-.224-.87C5.999 16.644 6 16.333 6 16s0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155a2.25 2.25 0 0 1 .897-.828l.112-.053c.26-.111.52-.152.757-.171.258-.022.568-.021.902-.021zM19 5c.334 0 .644 0 .902.02.237.02.496.06.757.172l.113.053.155.087c.352.216.64.526.828.897.152.298.202.598.225.869.02.258.02.569.02.902s0 .644-.02.902a2.3 2.3 0 0 1-.225.87c-.216.423-.56.767-.983.983a2.3 2.3 0 0 1-.87.224c-.258.022-.569.021-.902.021H9c-.334 0-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225 2.25 2.25 0 0 1-.983-.984 2.3 2.3 0 0 1-.224-.869C5.999 8.644 6 8.334 6 8c0-.333 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155a2.25 2.25 0 0 1 .897-.828l.112-.053c.26-.111.52-.152.757-.171C8.356 4.999 8.666 5 9 5z"
        />
      </svg>
    ))
);
AlignHorizontalLeftIconFilled.displayName = "AlignHorizontalLeftIconFilled";
export { AlignHorizontalLeftIconFilled };
