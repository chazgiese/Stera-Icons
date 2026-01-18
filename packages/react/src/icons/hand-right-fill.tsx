import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandRightIconFill = memo(
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
          d="M14.477 1c.977 0 1.816.782 1.816 1.8v7.625c0 .276.24.5.538.5.297 0 .538-.224.538-.5V6.25l.01-.188a1.81 1.81 0 0 1 1.806-1.612c.977 0 1.815.782 1.815 1.8v8.05c0 4.829-4 8.7-8.877 8.7-4.38 0-8.05-3.12-8.755-7.257l-.027-.097-1.439-3.584-.033-.065-.087-.167a1.79 1.79 0 0 1 .757-2.307 1.82 1.82 0 0 1 1.184-.212c.51.081.991.379 1.28.867l.002.005 1.94 3.212c.12.198.37.296.607.239a.51.51 0 0 0 .402-.484v-9.2c0-1.018.838-1.8 1.815-1.8.916 0 1.71.687 1.806 1.612l.01.188v5.9c0 .276.24.5.538.5.297 0 .538-.224.538-.5V2.8c0-1.018.839-1.8 1.816-1.8"
        />
      </svg>
    ))
);
HandRightIconFill.displayName = "HandRightIconFill";
export { HandRightIconFill };
