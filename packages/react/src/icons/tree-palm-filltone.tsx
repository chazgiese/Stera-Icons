import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreePalmIconFilltone = memo(
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
          d="M14.28 1.822C16.787.368 19.906.9 21.747 2.975a1 1 0 0 1-.246 1.529l-3.878 2.248q.563.19 1.097.498c2.507 1.454 3.605 4.428 2.737 7.063a1 1 0 0 1-1.451.552L12 10.222l-8.007 4.643a1 1 0 0 1-1.451-.552c-.867-2.635.23-5.609 2.737-7.063q.534-.308 1.096-.498L2.498 4.504a1 1 0 0 1-.246-1.53C4.093.9 7.212.369 9.721 1.823A6.07 6.07 0 0 1 12 4.15a6.1 6.1 0 0 1 2.28-2.327"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.13 10.877c.114 2.712-.004 6.367-2.211 11.517a1 1 0 0 1-1.838-.788c2.11-4.922 2.162-8.229 2.036-10.874l.883-.51z"
        />
      </svg>
    ))
);
TreePalmIconFilltone.displayName = "TreePalmIconFilltone";
export { TreePalmIconFilltone };
