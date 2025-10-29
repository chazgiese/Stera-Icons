import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigUpIconFilltone = memo(
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
          d="M11.823 5.091a.25.25 0 0 1 .354 0l7.409 7.41H17a1 1 0 0 0 0 2V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4.5a1 1 0 0 0 0-2H4.414z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.41 3.677a2.25 2.25 0 0 1 3.18 0l8.264 8.263c.944.945.275 2.56-1.06 2.56H17a1 1 0 0 1 0-2h2.586l-7.41-7.409a.25.25 0 0 0-.353 0l-7.409 7.41H7a1 1 0 0 1 0 2H3.207c-1.336 0-2.005-1.616-1.06-2.561z"
        />
      </svg>
    ))
);
ArrowBigUpIconFilltone.displayName = "ArrowBigUpIconFilltone";
export { ArrowBigUpIconFilltone };
