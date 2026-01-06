import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PedestalIconFillDuotone = memo(
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
          d="M19.82 8.982a2.99 2.99 0 0 1-1.873 3.863q.022.129.033.253c.02.258.02.568.02.902v5c0 .334 0 .644-.02.902a2.3 2.3 0 0 1-.225.87c-.216.423-.56.767-.983.983a2.3 2.3 0 0 1-.87.225 9 9 0 0 1-.652.018V15a1 1 0 1 0-2 0v7h-2.5v-7a1 1 0 1 0-2 0v6.998a9 9 0 0 1-.652-.018 2.3 2.3 0 0 1-.87-.225 2.25 2.25 0 0 1-.983-.983 2.3 2.3 0 0 1-.224-.87C5.999 19.644 6 19.333 6 19v-5c0-.334 0-.644.02-.902q.01-.123.032-.253A3 3 0 0 1 4.18 8.982C4.42 8.998 4.7 9 5 9h14c.299 0 .578-.003.82-.018"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.75 14a1 1 0 0 1 1 1v7h-2v-7a1 1 0 0 1 1-1M14.25 14a1 1 0 0 1 1 1v7h-2v-7a1 1 0 0 1 1-1M19 2c.334 0 .644 0 .902.02.237.02.496.06.757.172l.113.053.155.087c.352.216.64.526.828.897.152.298.202.598.225.869.02.258.02.569.02.902v1c0 .333 0 .644-.02.902a2.3 2.3 0 0 1-.225.87 2.25 2.25 0 0 1-.983.983 2.3 2.3 0 0 1-.87.224C19.644 9.001 19.333 9 19 9H5c-.333 0-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225 2.25 2.25 0 0 1-.983-.984 2.3 2.3 0 0 1-.224-.869C1.999 6.644 2 6.333 2 6V5c0-.333 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155a2.25 2.25 0 0 1 .897-.828l.112-.053c.26-.111.52-.152.757-.171C4.356 1.999 4.667 2 5 2z"
        />
      </svg>
    ))
);
PedestalIconFillDuotone.displayName = "PedestalIconFillDuotone";
export { PedestalIconFillDuotone };
