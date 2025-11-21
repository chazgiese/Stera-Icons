import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LotusIconFilltone = memo(
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
          <path d="M21 11v1.003a7 7 0 0 1-6.575 6.985l.625-.624a8.98 8.98 0 0 0 2.612-6.965c.73-.258 1.515-.399 2.335-.399zM4 11c.82 0 1.607.142 2.337.4a8.98 8.98 0 0 0 2.613 6.964l.621.621A7 7 0 0 1 3 12v-1zM13.636 7.05a6.97 6.97 0 0 1 1.967 3.864 6.99 6.99 0 0 1-1.967 6.036L12 18.586l-1.636-1.636a6.99 6.99 0 0 1-1.967-6.035 6.97 6.97 0 0 1 1.967-3.865L12 5.414zM18.397 4.568a1 1 0 0 1 1.344.726L20.52 9h-.524c-.937 0-1.84.147-2.691.413a9 9 0 0 0-1.812-3.3l2.797-1.496z" />
          <path
            fillRule="evenodd"
            d="M4 9h-.52l.78-3.706.03-.113a1 1 0 0 1 1.42-.564l2.796 1.496a8.96 8.96 0 0 0-1.813 3.3A9 9 0 0 0 4 9"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M21 11h-1.003c-.82 0-1.605.141-2.335.4a8.98 8.98 0 0 1-2.612 6.964l-.625.624A7 7 0 0 0 21 12.003zM10.364 7.05a6.97 6.97 0 0 0-1.967 3.865 6.99 6.99 0 0 0 1.967 6.035L12 18.586l1.636-1.636a6.99 6.99 0 0 0 1.967-6.036 6.97 6.97 0 0 0-1.967-3.864L12 5.414zM23 12.003a9 9 0 0 1-9 9h-.002L11.999 21H10a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h2c.937 0 1.842.146 2.693.413A8.96 8.96 0 0 1 8.95 5.636l2.343-2.343.076-.068a1 1 0 0 1 1.338.068l2.343 2.343a8.96 8.96 0 0 1 2.256 3.777A9 9 0 0 1 19.997 9H22a1 1 0 0 1 1 1zM3 12a7 7 0 0 0 6.571 6.985l-.62-.62A8.98 8.98 0 0 1 6.336 11.4 7 7 0 0 0 4 11H3z"
        />
      </svg>
    ))
);
LotusIconFilltone.displayName = "LotusIconFilltone";
export { LotusIconFilltone };
