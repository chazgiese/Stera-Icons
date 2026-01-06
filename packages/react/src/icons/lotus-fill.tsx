import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LotusIconFill = memo(
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
          d="M11.37 3.225a1 1 0 0 1 1.337.068l2.343 2.343q.23.231.441.476l2.8-1.496.107-.05a1.003 1.003 0 0 1 1.343.727L20.521 9H22a1 1 0 0 1 1 1v2.003a9 9 0 0 1-9 9h-.002L11.999 21H10a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h1.48l.78-3.707.03-.113a1.003 1.003 0 0 1 1.42-.564l2.797 1.496-.031.037q.225-.264.474-.513l2.343-2.343zM19.996 11c-.82 0-1.605.142-2.335.4a8.98 8.98 0 0 1-2.612 6.964l-.625.624A7 7 0 0 0 21 12.003V11zM3 12a7 7 0 0 0 6.571 6.986l-.62-.622a8.98 8.98 0 0 1-2.614-6.963A7 7 0 0 0 4 11H3zm7.364-4.95a6.97 6.97 0 0 0-1.967 3.865 6.99 6.99 0 0 0 1.967 6.035L12 18.586l1.636-1.636a6.99 6.99 0 0 0 1.967-6.036 6.97 6.97 0 0 0-1.967-3.864L12 5.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LotusIconFill.displayName = "LotusIconFill";
export { LotusIconFill };
