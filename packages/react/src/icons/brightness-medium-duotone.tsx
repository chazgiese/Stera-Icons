import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessMediumIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 18.5a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-1.5a1 1 0 0 1 1-1M5.991 16.593a1 1 0 0 1 1.414 1.414l-1.06 1.06a1 1 0 0 1-1.414-1.414zM16.605 16.592a1 1 0 0 1 1.414 0l1.06 1.061a1 1 0 0 1-1.414 1.414l-1.06-1.06a1 1 0 0 1 0-1.415M4.505 10.995a1 1 0 0 1 0 2h-1.5a1.001 1.001 0 1 1 0-2zM21.005 10.995a1 1 0 0 1 0 2h-1.5a1 1 0 0 1 0-2zM17.658 4.926a1.001 1.001 0 0 1 1.415 1.414L18.012 7.4a1 1 0 0 1-1.414-1.414zM4.938 4.925a1 1 0 0 1 1.414 0l1.06 1.06A1 1 0 0 1 5.998 7.4l-1.06-1.06a1 1 0 0 1 0-1.414M12 2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BrightnessMediumIconDuotone.displayName = "BrightnessMediumIconDuotone";
export { BrightnessMediumIconDuotone };
