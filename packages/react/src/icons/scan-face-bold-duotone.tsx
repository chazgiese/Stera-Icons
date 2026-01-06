import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanFaceIconBoldDuotone = memo(
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
          <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M13.8 13.265a.75.75 0 0 1 1.2.9 3.75 3.75 0 0 1-3 1.5 3.75 3.75 0 0 1-3-1.5.75.75 0 0 1 1.2-.9c.411.548 1.065.9 1.8.9s1.389-.352 1.8-.9M9.9 9.45a1.05 1.05 0 1 1 0 2.099 1.05 1.05 0 0 1 0-2.1M14.1 9.45a1.05 1.05 0 1 1 0 2.099 1.05 1.05 0 0 1 0-2.1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanFaceIconBoldDuotone.displayName = "ScanFaceIconBoldDuotone";
export { ScanFaceIconBoldDuotone };
