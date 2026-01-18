import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleObtuseIconFillDuotone = memo(
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
          <path d="M20.513 12.017a1.5 1.5 0 0 1 1.96.81q0 .005.004.01a1.5 1.5 0 0 1-2.772 1.148l-.003-.008a1.5 1.5 0 0 1 .81-1.96M17.42 8.451a1.5 1.5 0 0 1 2.122 0l.008.007a1.5 1.5 0 0 1-2.122 2.12l-.006-.006a1.5 1.5 0 0 1-.001-2.12M13.203 6.335a1.5 1.5 0 0 1 1.96-.812l.01.004a1.5 1.5 0 1 1-1.15 2.77l-.008-.002a1.5 1.5 0 0 1-.812-1.96M5.186 5.384a1.5 1.5 0 0 1 1.07 2.803l-.007.002a1.5 1.5 0 0 1-1.072-2.801zM10.005 4.5a1.5 1.5 0 0 1-.001 3h-.008a1.5 1.5 0 0 1-.001-3z" />
        </g>
        <path
          fill="currentColor"
          d="M1.003 7.935a1.5 1.5 0 0 1 2.118.118l7.55 8.447h11.33a1.5 1.5 0 0 1 0 3H10c-.428 0-.835-.183-1.12-.5L.885 10.052a1.5 1.5 0 0 1 .118-2.118"
        />
      </svg>
    ))
);
AngleObtuseIconFillDuotone.displayName = "AngleObtuseIconFillDuotone";
export { AngleObtuseIconFillDuotone };
