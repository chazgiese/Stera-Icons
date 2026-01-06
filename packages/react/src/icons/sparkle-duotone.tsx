import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleIconDuotone = memo(
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
          d="M12.674 1.673a1 1 0 0 1 .038.09l1.234 3.705a7.25 7.25 0 0 0 4.586 4.586l3.705 1.234a.75.75 0 0 1 0 1.424l-3.705 1.234a7.25 7.25 0 0 0-4.586 4.586l-1.234 3.705a.746.746 0 0 0 0-.475L12 19.628l.523-1.57a8.75 8.75 0 0 1 5.535-5.534L19.627 12l-1.57-.523a8.75 8.75 0 0 1-5.534-5.535L12 4.372l.712-2.135a.75.75 0 0 0-.038-.564"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.288 1.763a.75.75 0 0 1 1.424.475l-1.235 3.705a8.75 8.75 0 0 1-5.535 5.534L4.372 12l1.57.524a8.75 8.75 0 0 1 5.535 5.534l1.235 3.705a.751.751 0 0 1-1.424.475l-1.234-3.705a7.25 7.25 0 0 0-4.586-4.586l-3.705-1.235a.75.75 0 0 1 0-1.424l3.705-1.234a7.25 7.25 0 0 0 4.586-4.586z"
        />
      </svg>
    ))
);
SparkleIconDuotone.displayName = "SparkleIconDuotone";
export { SparkleIconDuotone };
