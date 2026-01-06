import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightIconBold = memo(
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
          d="M3 3a1 1 0 0 0-1 1v8a4 4 0 0 0 4 4h12.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l5-5 .066-.073.005-.007q.05-.06.088-.128l.006-.012A1 1 0 0 0 22 15a1 1 0 0 0-.293-.707l-5-5a1 1 0 1 0-1.414 1.414L18.586 14H6a2 2 0 0 1-2-2V4a1 1 0 0 0-1-1"
        />
      </svg>
    ))
);
ArrowCornerDownRightIconBold.displayName = "ArrowCornerDownRightIconBold";
export { ArrowCornerDownRightIconBold };
