import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigUpIconFill = memo(
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
          d="M10.41 3.677a2.25 2.25 0 0 1 3.18 0l8.264 8.263c.944.945.275 2.56-1.06 2.56H17V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4.5H3.207c-1.336 0-2.005-1.615-1.06-2.56z"
        />
      </svg>
    ))
);
ArrowBigUpIconFill.displayName = "ArrowBigUpIconFill";
export { ArrowBigUpIconFill };
