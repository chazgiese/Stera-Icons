import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDotsIconFilltone = memo(
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
          <path d="M12.004 19a2 2 0 0 1 .002 4h-.012a2 2 0 0 1 .002-4zM4.219 16.945a2 2 0 0 1 2.834.007 2 2 0 0 1-2.826 2.83l-.01-.009a2 2 0 0 1 .002-2.828M16.952 16.947a2 2 0 0 1 2.83 2.826l-.009.01a2 2 0 1 1-2.826-2.83zM3.001 9.995A2 2 0 0 1 5 11.996v.008a2 2 0 1 1-4 .002v-.012a2 2 0 0 1 2.001-1.999M20.999 9.995a2 2 0 0 1 2.001 2v.01a2 2 0 0 1-4-.001v-.008a2 2 0 0 1 1.999-2M4.227 4.218a2 2 0 1 1 2.82 2.835 2 2 0 0 1-2.83-2.826zM16.945 4.219a2 2 0 0 1 2.828-.001l.01.009a2 2 0 1 1-2.836 2.82 2 2 0 0 1-.002-2.828M12.006 1a2 2 0 0 1-.002 4h-.008a2 2 0 0 1-.002-4z" />
        </g>
        <path fill="currentColor" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
      </svg>
    ))
);
CircleDotsIconFilltone.displayName = "CircleDotsIconFilltone";
export { CircleDotsIconFilltone };
