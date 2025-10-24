import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignHorizontalLeftIconFilltone = memo(
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
          d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13 13c.338 0 .636 0 .882.02.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882s0 .636-.02.882c-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02H8.5c-.338 0-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.545-.02-.882 0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02zM19 5.5c.338 0 .636 0 .882.02.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882s0 .636-.02.882c-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02H8.5c-.338 0-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.544-.02-.882s0-.636.02-.882c.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02z"
        />
      </svg>
    ))
);
AlignHorizontalLeftIconFilltone.displayName = "AlignHorizontalLeftIconFilltone";
export { AlignHorizontalLeftIconFilltone };
