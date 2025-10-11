import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignVerticalTopIconFilled = memo(
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
          d="M2 3a1 1 0 0 0 1 1h18a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1M13 13c0 .334 0 .644.02.902.02.237.06.496.172.757l.053.112.087.156c.216.352.526.64.896.828.299.152.6.202.87.224.258.022.568.021.902.021s.644 0 .902-.02a2.3 2.3 0 0 0 .87-.225c.423-.216.767-.56.983-.984a2.3 2.3 0 0 0 .225-.869c.02-.258.02-.568.02-.902V9c0-.334 0-.644-.02-.902a2.3 2.3 0 0 0-.225-.87 2.25 2.25 0 0 0-.983-.983 2.3 2.3 0 0 0-.87-.224C16.644 5.999 16.333 6 16 6s-.644 0-.902.02a2.3 2.3 0 0 0-.87.225l-.155.087a2.25 2.25 0 0 0-.828.897l-.053.112c-.111.26-.152.52-.171.757-.022.258-.021.568-.021.902zM5 19c0 .334 0 .644.02.902.02.237.06.496.172.757l.053.113.087.155c.216.352.526.64.897.828.298.152.598.202.869.225.258.02.569.02.902.02s.644 0 .902-.02a2.3 2.3 0 0 0 .87-.225c.423-.216.767-.56.983-.983a2.3 2.3 0 0 0 .224-.87c.022-.258.021-.569.021-.902V9c0-.334 0-.644-.02-.902a2.3 2.3 0 0 0-.225-.87 2.25 2.25 0 0 0-.984-.983 2.3 2.3 0 0 0-.869-.224C8.644 5.999 8.334 6 8 6c-.333 0-.644 0-.902.02a2.3 2.3 0 0 0-.87.225l-.155.087a2.25 2.25 0 0 0-.828.897l-.053.112c-.111.26-.152.52-.171.757C4.999 8.356 5 8.666 5 9z"
        />
      </svg>
    ))
);
AlignVerticalTopIconFilled.displayName = "AlignVerticalTopIconFilled";
export { AlignVerticalTopIconFilled };
