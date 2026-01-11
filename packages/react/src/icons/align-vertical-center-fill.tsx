import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignVerticalCenterIconFill = memo(
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
          d="M8.25 3.25c.338 0 .636 0 .882.02.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882v5h2V9c0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02s.636 0 .882.02c.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882v2H21a1 1 0 1 1 0 2h-2.5v2c0 .338 0 .636-.02.882-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02s-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776C13 15.636 13 15.338 13 15v-2h-2v5c0 .337 0 .636-.02.882-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02s-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.545-.02-.882v-5H3a1 1 0 1 1 0-2h2.5V6c0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02"
        />
      </svg>
    ))
);
AlignVerticalCenterIconFill.displayName = "AlignVerticalCenterIconFill";
export { AlignVerticalCenterIconFill };
