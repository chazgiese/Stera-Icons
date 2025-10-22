import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignVerticalCenterIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M18.5 11H21a1 1 0 1 1 0 2h-2.5zM13 11v2h-2v-2zM2 12a1 1 0 0 1 1-1h2.5v2H3a1 1 0 0 1-1-1" />
        </g>
        <path
          fill="currentColor"
          d="M13 9c0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02s.636 0 .882.02c.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882v6c0 .338 0 .636-.02.882-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02s-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776C13 15.636 13 15.338 13 15zM5.5 6c0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02s.636 0 .882.02c.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882v12c0 .337 0 .636-.02.882-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02s-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.545-.02-.882z"
        />
      </svg>
    ))
);
AlignVerticalCenterIconFilltone.displayName = "AlignVerticalCenterIconFilltone";
export { AlignVerticalCenterIconFilltone };
