import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersAltIconFilled = memo(
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
          d="M20.553 15.606a1 1 0 0 1 .895 1.789L14.237 21a5 5 0 0 1-4.473 0l-7.21-3.605a1 1 0 0 1 .894-1.789l7.21 3.605c.845.423 1.84.423 2.684 0z"
        />
        <path
          fill="currentColor"
          d="M20.553 11.606a1 1 0 0 1 .895 1.789L14.237 17a5 5 0 0 1-4.473 0l-7.21-3.605a1 1 0 0 1 .894-1.789l7.21 3.605c.845.422 1.84.423 2.684 0z"
        />
        <path
          fill="currentColor"
          d="M9.764 3a5 5 0 0 1 4.473 0l6.869 3.435c1.29.645 1.29 2.486 0 3.13l-6.87 3.436a5 5 0 0 1-4.472 0L2.895 9.566c-1.29-.645-1.29-2.486 0-3.13z"
        />
      </svg>
    ))
);
LayersAltIconFilled.displayName = "LayersAltIconFilled";
export { LayersAltIconFilled };
