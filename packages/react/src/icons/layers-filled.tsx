import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconFilled = memo(
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
          d="M21.106 15.434c1.29.645 1.29 2.486 0 3.131L14.237 22a5 5 0 0 1-4.472 0l-6.87-3.435c-1.29-.645-1.29-2.486 0-3.13l.192-.098 6.007 3.004a6.5 6.5 0 0 0 5.814 0l6.006-3.004z"
        />
        <path
          fill="currentColor"
          d="M21.106 10.434c1.29.645 1.29 2.486 0 3.131L14.237 17a5 5 0 0 1-4.472 0l-6.87-3.435c-1.29-.645-1.29-2.486 0-3.13l.192-.098 6.007 3.004a6.5 6.5 0 0 0 5.814 0l6.006-3.003z"
        />
        <path
          fill="currentColor"
          d="M9.765 2a5 5 0 0 1 4.472 0l6.87 3.435c1.288.645 1.288 2.486 0 3.131l-6.87 3.435a5 5 0 0 1-4.472 0l-6.87-3.435c-1.29-.645-1.29-2.486 0-3.13z"
        />
      </svg>
    ))
);
LayersIconFilled.displayName = "LayersIconFilled";
export { LayersIconFilled };
