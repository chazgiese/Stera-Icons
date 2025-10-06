import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignVerticalBottomFilled = memo(
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
          d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M13 11c0-.334 0-.644.02-.902.02-.237.06-.496.172-.757l.053-.112.087-.156c.216-.352.526-.64.896-.828a2.3 2.3 0 0 1 .87-.224C15.356 7.999 15.666 8 16 8s.644 0 .902.02c.27.023.571.073.87.225.423.216.767.56.983.984.152.298.202.598.225.869.02.258.02.568.02.902v4c0 .334 0 .644-.02.902a2.3 2.3 0 0 1-.225.87 2.25 2.25 0 0 1-.983.983 2.3 2.3 0 0 1-.87.225c-.258.02-.569.02-.902.02s-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225l-.155-.087a2.25 2.25 0 0 1-.828-.896l-.053-.113a2.4 2.4 0 0 1-.171-.757C12.999 15.644 13 15.334 13 15zM5 5c0-.333 0-.644.02-.902.02-.237.06-.496.172-.757l.053-.112.087-.156a2.25 2.25 0 0 1 .897-.828 2.3 2.3 0 0 1 .869-.224C7.356 1.999 7.667 2 8 2s.644 0 .902.02c.27.023.571.073.87.225.423.216.767.56.983.984.152.298.202.598.224.869.022.258.021.569.021.902v10c0 .334 0 .644-.02.902a2.3 2.3 0 0 1-.225.87 2.25 2.25 0 0 1-.984.983 2.3 2.3 0 0 1-.869.225C8.644 18 8.334 18 8 18c-.333 0-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225l-.155-.087a2.25 2.25 0 0 1-.828-.896l-.053-.113a2.4 2.4 0 0 1-.171-.757C4.999 15.644 5 15.334 5 15z"
        />
      </svg>
    ))
);
AlignVerticalBottomFilled.displayName = "AlignVerticalBottomFilled";
export { AlignVerticalBottomFilled };
