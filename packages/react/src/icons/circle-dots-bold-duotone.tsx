import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDotsIconBoldDuotone = memo(
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
          d="M12.004 19a2 2 0 0 1 .002 4h-.012a2 2 0 0 1 .002-4zM3.001 9.995A2 2 0 0 1 5 11.996v.008a2 2 0 1 1-4 .002v-.012a2 2 0 0 1 2.001-1.999M20.999 9.995a2 2 0 0 1 2.001 2v.01a2 2 0 0 1-4-.001v-.008a2 2 0 0 1 1.999-2M12.006 1a2 2 0 0 1-.002 4h-.008a2 2 0 0 1-.002-4z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.219 16.946a2 2 0 0 1 2.834.006 2 2 0 0 1-2.826 2.83l-.01-.008a2 2 0 0 1 .002-2.828M16.952 16.948a2 2 0 0 1 2.83 2.826l-.009.008a2 2 0 1 1-2.826-2.83zM4.227 4.218a2 2 0 1 1 2.826 2.83l-.005.005a2 2 0 0 1-2.83-2.826zM16.945 4.219a2 2 0 0 1 2.828-.001l.01.009a2 2 0 1 1-2.836 2.821 2 2 0 0 1-.002-2.829" />
        </g>
      </svg>
    ))
);
CircleDotsIconBoldDuotone.displayName = "CircleDotsIconBoldDuotone";
export { CircleDotsIconBoldDuotone };
