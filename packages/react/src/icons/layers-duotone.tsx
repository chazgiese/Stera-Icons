import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconDuotone = memo(
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
          fillRule="evenodd"
          d="M9.876 2.723a4.75 4.75 0 0 1 4.248 0l6.87 3.435c1.105.553 1.105 2.13 0 2.683l-6.87 3.435a4.75 4.75 0 0 1-4.248 0l-6.87-3.435c-1.105-.552-1.105-2.13 0-2.683zm3.577 1.342a3.25 3.25 0 0 0-2.906 0L3.677 7.5l6.87 3.434a3.25 3.25 0 0 0 2.906 0l6.87-3.434z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.994 10.659c1.105.552 1.105 2.13 0 2.682l-1.818.909 1.818.909c1.105.552 1.105 2.13 0 2.682l-6.87 3.436a4.75 4.75 0 0 1-4.249 0L3.006 17.84c-1.105-.553-1.105-2.13 0-2.682l1.818-.91-1.818-.908c-1.105-.552-1.105-2.13 0-2.682l1.818-.91 1.676.838-2.823 1.414 6.87 3.434a3.25 3.25 0 0 0 2.906 0l6.87-3.434-2.824-1.413 1.677-.838zm-6.87 6.118a4.75 4.75 0 0 1-4.249 0L6.5 15.087 3.677 16.5l6.87 3.435a3.25 3.25 0 0 0 2.906 0l6.87-3.434-2.824-1.414z"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
LayersIconDuotone.displayName = "LayersIconDuotone";
export { LayersIconDuotone };
