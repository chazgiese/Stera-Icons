import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsLeftRightEllipsisIconFillDuotone = memo(
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
          <path d="M5.94 5.94a1.5 1.5 0 1 1 2.12 2.12L4.122 12l3.94 3.94a1.5 1.5 0 1 1-2.122 2.12l-5-5a1.5 1.5 0 0 1 0-2.12zM15.94 5.94a1.5 1.5 0 0 1 2.12 0l5 5a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 1 1-2.12-2.12L19.879 12l-3.94-3.94a1.5 1.5 0 0 1 0-2.12" />
        </g>
        <path
          fill="currentColor"
          d="M8 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
      </svg>
    ))
);
ChevronsLeftRightEllipsisIconFillDuotone.displayName =
  "ChevronsLeftRightEllipsisIconFillDuotone";
export { ChevronsLeftRightEllipsisIconFillDuotone };
