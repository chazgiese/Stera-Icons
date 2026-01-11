import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIcon = memo(
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
          d="M9.875 2.724a4.75 4.75 0 0 1 4.25 0l6.869 3.435c1.105.552 1.105 2.13 0 2.682l-1.818.909 1.818.909c1.105.552 1.105 2.13 0 2.682l-1.818.909 1.818.909c1.105.552 1.105 2.13 0 2.682l-6.87 3.436a4.75 4.75 0 0 1-4.249 0L3.006 17.84c-1.105-.553-1.105-2.13 0-2.682l1.818-.91-1.818-.908c-1.105-.553-1.105-2.13 0-2.682l1.818-.91-1.818-.908c-1.105-.553-1.105-2.13 0-2.682zm4.25 14.053a4.75 4.75 0 0 1-4.25 0L6.5 15.087 3.677 16.5l6.87 3.435a3.25 3.25 0 0 0 2.906 0l6.87-3.434-2.824-1.414zm0-4.5a4.75 4.75 0 0 1-2.685.468 4.8 4.8 0 0 1-1.565-.468L6.5 10.587l-2.822 1.414 6.87 3.434a3.25 3.25 0 0 0 2.906 0l6.87-3.434-2.824-1.414zm-.672-8.212a3.25 3.25 0 0 0-2.907 0L3.677 7.5l6.87 3.435c.32.16.66.262 1.006.31q.447-.042.893 0c.346-.048.687-.15 1.007-.31l6.87-3.435z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIcon.displayName = "LayersIcon";
export { LayersIcon };
