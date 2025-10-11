import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignHorizontalRightIconFilled = memo(
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
          d="M21 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M11 13c-.334 0-.644 0-.902.02-.237.02-.496.06-.757.172l-.112.053-.156.087c-.352.216-.64.526-.828.896a2.3 2.3 0 0 0-.224.87C7.999 15.356 8 15.666 8 16s0 .644.02.902c.023.27.073.571.225.87.216.423.56.767.984.983.298.152.598.202.869.225.258.02.568.02.902.02h4c.334 0 .644 0 .902-.02a2.3 2.3 0 0 0 .87-.225 2.25 2.25 0 0 0 .983-.983 2.3 2.3 0 0 0 .225-.87c.02-.258.02-.569.02-.902s0-.644-.02-.902a2.3 2.3 0 0 0-.225-.87l-.087-.155a2.25 2.25 0 0 0-.896-.828l-.113-.053a2.4 2.4 0 0 0-.757-.171C15.644 12.999 15.334 13 15 13zM5 5c-.333 0-.644 0-.902.02-.237.02-.496.06-.757.172l-.112.053-.156.087a2.25 2.25 0 0 0-.828.897 2.3 2.3 0 0 0-.224.869C1.999 7.356 2 7.667 2 8s0 .644.02.902c.023.27.073.571.225.87.216.423.56.767.984.983.298.152.598.202.869.224.258.022.569.021.902.021h10c.334 0 .644 0 .902-.02a2.3 2.3 0 0 0 .87-.225 2.25 2.25 0 0 0 .983-.984 2.3 2.3 0 0 0 .225-.869C18 8.644 18 8.334 18 8c0-.333 0-.644-.02-.902a2.3 2.3 0 0 0-.225-.87l-.087-.155a2.25 2.25 0 0 0-.896-.828l-.113-.053a2.4 2.4 0 0 0-.757-.171C15.644 4.999 15.334 5 15 5z"
        />
      </svg>
    ))
);
AlignHorizontalRightIconFilled.displayName = "AlignHorizontalRightIconFilled";
export { AlignHorizontalRightIconFilled };
