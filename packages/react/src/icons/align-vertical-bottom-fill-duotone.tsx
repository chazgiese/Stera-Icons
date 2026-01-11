import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignVerticalBottomIconFillDuotone = memo(
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
          d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8.25 2.25c.338 0 .636 0 .882.02.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882v10.5c0 .338 0 .636-.02.882-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02s-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.545-.02-.882V5c0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02M15.75 8.25c.338 0 .636 0 .882.02.255.02.52.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.246.02.544.02.882v4.5c0 .338 0 .636-.02.882-.02.255-.067.52-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.246.02-.544.02-.882.02s-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.545-.02-.882V11c0-.338 0-.636.02-.882.02-.255.067-.52.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.246-.02.544-.02.882-.02"
        />
      </svg>
    ))
);
AlignVerticalBottomIconFillDuotone.displayName =
  "AlignVerticalBottomIconFillDuotone";
export { AlignVerticalBottomIconFillDuotone };
