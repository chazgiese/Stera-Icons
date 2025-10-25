import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignHorizontalCenterIconFilltone = memo(
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
          <path d="M13 18.5V21a1 1 0 1 1-2 0v-2.5zM13 13h-2v-2h2zM12 2a1 1 0 0 1 1 1v2.5h-2V3a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M15 13c.338 0 .636 0 .882.02.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882s0 .636-.02.882c-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02H9c-.338 0-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.545-.02-.882 0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198C8.364 13 8.662 13 9 13zM18 5.5c.338 0 .636 0 .882.02.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882s0 .636-.02.882c-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02H6c-.338 0-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.544-.02-.882s0-.636.02-.882c.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02z"
        />
      </svg>
    ))
);
AlignHorizontalCenterIconFilltone.displayName =
  "AlignHorizontalCenterIconFilltone";
export { AlignHorizontalCenterIconFilltone };
