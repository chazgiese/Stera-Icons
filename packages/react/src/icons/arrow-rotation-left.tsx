import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRotationLeft = memo(
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
          d="M5.813 5.813a.75.75 0 0 1 1.06 1.06 7.252 7.252 0 0 0 4.859 12.372l.268.005h1.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H12l-.324-.006A8.751 8.751 0 0 1 5.813 5.813M11.47.47a.75.75 0 0 1 1.06 1.06l-1.72 1.72H12l.324.006a8.75 8.75 0 0 1 5.864 14.932.75.75 0 0 1-1.06-1.061 7.251 7.251 0 0 0-4.86-12.372L12 4.75h-1.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z"
        />
      </svg>
    ))
);
ArrowRotationLeft.displayName = "ArrowRotationLeft";
export { ArrowRotationLeft };
