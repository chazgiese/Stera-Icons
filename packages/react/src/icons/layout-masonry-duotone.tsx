import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayoutMasonryIconDuotone = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.4}
        >
          <path d="M8.75 15.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5zM19.75 2.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.75 11.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5zM8.75 2.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayoutMasonryIconDuotone.displayName = "LayoutMasonryIconDuotone";
export { LayoutMasonryIconDuotone };
