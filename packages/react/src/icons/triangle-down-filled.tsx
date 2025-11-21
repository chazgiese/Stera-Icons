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
          d="M15.728 2c1.339 0 2.412-.001 3.246.075.83.076 1.587.24 2.203.686a4 4 0 0 1 1.63 2.808c.082.757-.152 1.496-.498 2.253-.173.381-.394.804-.654 1.278l-.89 1.578-3.73 6.525c-.672 1.178-1.21 2.122-1.696 2.816-.483.689-1.006 1.272-1.705 1.586a4 4 0 0 1-3.268 0c-.7-.314-1.223-.897-1.705-1.586-.486-.694-1.024-1.638-1.697-2.816l-3.729-6.525C2.571 9.516 2.038 8.584 1.69 7.822c-.345-.757-.58-1.496-.498-2.253a4 4 0 0 1 1.63-2.808c.616-.446 1.374-.61 2.203-.686C5.86 2 6.933 2 8.271 2z"
        />
      </svg>
    ))
);
TriangleDownIconFilled.displayName = "TriangleDownIconFilled";
export { TriangleDownIconFilled };
