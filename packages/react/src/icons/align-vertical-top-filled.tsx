import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlignVerticalTopIconFilled = memo(
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
          d="M22 3.25a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1M13 13.25c0 .338 0 .636.02.882.02.255.067.52.198.776a2 2 0 0 0 .874.874c.257.131.521.178.776.198.246.02.544.02.882.02s.636 0 .882-.02c.255-.02.52-.067.776-.198a2 2 0 0 0 .874-.874c.131-.257.178-.521.198-.776.02-.246.02-.544.02-.882v-4.5c0-.338 0-.636-.02-.882a2 2 0 0 0-.198-.776 2 2 0 0 0-.874-.874 2 2 0 0 0-.776-.198C16.386 6 16.088 6 15.75 6s-.636 0-.882.02c-.255.02-.52.067-.776.198a2 2 0 0 0-.874.874 2 2 0 0 0-.198.776c-.02.246-.02.544-.02.882zM5.5 19.25c0 .337 0 .636.02.882.02.255.067.52.198.776a2 2 0 0 0 .874.874c.257.131.521.178.776.198.246.02.544.02.882.02s.636 0 .882-.02c.255-.02.52-.067.776-.198a2 2 0 0 0 .874-.874c.131-.257.178-.521.198-.776.02-.246.02-.545.02-.882V8.75c0-.338 0-.636-.02-.882a2 2 0 0 0-.198-.776 2 2 0 0 0-.874-.874 2 2 0 0 0-.776-.198C8.886 6 8.588 6 8.25 6s-.636 0-.882.02c-.255.02-.52.067-.776.198a2 2 0 0 0-.874.874 2 2 0 0 0-.198.776c-.02.246-.02.544-.02.882z"
        />
      </svg>
    ))
);
AlignVerticalTopIconFilled.displayName = "AlignVerticalTopIconFilled";
export { AlignVerticalTopIconFilled };
