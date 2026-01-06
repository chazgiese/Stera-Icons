import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CylinderIconDuotone = memo(
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
          stroke="currentColor"
          strokeWidth={1.5}
          d="M20 5c0 1.657-3.582 3-8 3S4 6.657 4 5s3.582-3 8-3 8 1.343 8 3Z"
        />
        <path
          fill="currentColor"
          d="M3.25 5c0 .706.384 1.288.88 1.729q.277.242.62.455V19c0 .123.064.33.376.606.312.277.806.56 1.48.813 1.344.504 3.251.831 5.394.831s4.05-.327 5.394-.831c.674-.253 1.168-.536 1.48-.813s.376-.483.376-.606V7.184q.343-.213.62-.455c.496-.441.88-1.023.88-1.729v14c0 .706-.384 1.288-.88 1.729-.499.441-1.177.804-1.95 1.094-1.552.582-3.645.927-5.92.927s-4.368-.345-5.92-.927c-.773-.29-1.451-.653-1.95-1.094-.496-.441-.88-1.023-.88-1.729z"
          opacity={0.4}
        />
      </svg>
    ))
);
CylinderIconDuotone.displayName = "CylinderIconDuotone";
export { CylinderIconDuotone };
