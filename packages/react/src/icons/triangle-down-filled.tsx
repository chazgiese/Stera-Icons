import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleDownIconFilled = memo(
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
          d="M15.729 2c1.338 0 2.412-.001 3.246.075.829.076 1.587.24 2.203.686a4 4 0 0 1 1.63 2.808c.082.757-.153 1.496-.498 2.253-.174.381-.395.804-.654 1.278l-.891 1.578-3.729 6.525c-.673 1.178-1.211 2.122-1.697 2.816-.482.689-1.005 1.272-1.705 1.586a4 4 0 0 1-3.267 0c-.7-.314-1.223-.897-1.706-1.586-.485-.694-1.024-1.638-1.697-2.816l-3.728-6.525C2.572 9.516 2.038 8.584 1.69 7.822c-.346-.757-.58-1.496-.498-2.253a4 4 0 0 1 1.63-2.808c.616-.446 1.374-.61 2.203-.686C5.86 2 6.933 2 8.272 2z"
        />
      </svg>
    ))
);
TriangleDownIconFilled.displayName = "TriangleDownIconFilled";
export { TriangleDownIconFilled };
