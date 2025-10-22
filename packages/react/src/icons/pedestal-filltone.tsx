import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PedestalIconFilltone = memo(
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
          d="M17 7a3 3 0 0 1 .947 5.845q.022.129.033.253c.02.258.02.568.02.902v5c0 .334 0 .644-.02.902a2.3 2.3 0 0 1-.225.87c-.216.423-.56.767-.983.983a2.3 2.3 0 0 1-.87.225c-.258.02-.568.02-.902.02H9c-.334 0-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225 2.25 2.25 0 0 1-.983-.983 2.3 2.3 0 0 1-.224-.87C5.999 19.644 6 19.333 6 19v-5c0-.334 0-.644.02-.902q.01-.123.032-.253A3 3 0 0 1 7 7z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9.75 14a1 1 0 0 1 1 1v7h-2v-7a1 1 0 0 1 1-1M14.25 14a1 1 0 0 1 1 1v7h-2v-7a1 1 0 0 1 1-1M19 2c.334 0 .644 0 .902.02.237.02.496.06.757.172l.113.053.155.087c.352.216.64.526.828.897.152.298.202.598.225.869.02.258.02.569.02.902v1c0 .333 0 .644-.02.902a2.3 2.3 0 0 1-.225.87 2.25 2.25 0 0 1-.983.983 2.3 2.3 0 0 1-.87.224C19.644 9.001 19.333 9 19 9H5c-.333 0-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225 2.25 2.25 0 0 1-.983-.984 2.3 2.3 0 0 1-.224-.869C1.999 6.644 2 6.333 2 6V5c0-.333 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155a2.25 2.25 0 0 1 .897-.828l.112-.053c.26-.111.52-.152.757-.171C4.356 1.999 4.667 2 5 2z"
        />
      </svg>
    ))
);
PedestalIconFilltone.displayName = "PedestalIconFilltone";
export { PedestalIconFilltone };
