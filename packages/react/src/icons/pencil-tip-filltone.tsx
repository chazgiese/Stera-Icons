import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilTipIconFilltone = memo(
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
          d="M12 1a1 1 0 0 1 .79.386l6.367 8.187c.546.702.843 1.567.843 2.456V21a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.97c0-.89.297-1.755.843-2.457l6.368-8.187.075-.086A1 1 0 0 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.517 10.125A4 4 0 0 1 20 12.031v.088l-2 1-.658.33a3 3 0 0 1-2.684 0L13 12.62V23h-2V12.62l-1.658.83a3 3 0 0 1-2.684 0L4 12.12v-.089c0-.669.168-1.324.483-1.906l3.07 1.535c.281.14.613.14.894 0l2.211-1.105a3 3 0 0 1 2.684 0l2.21 1.105c.282.14.614.14.895 0zM12 1a1 1 0 0 1 .79.386l3.189 4.1-.744.62a5.08 5.08 0 0 1-6.471 0l-.743-.62 3.19-4.1.075-.086A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
PencilTipIconFilltone.displayName = "PencilTipIconFilltone";
export { PencilTipIconFilltone };
