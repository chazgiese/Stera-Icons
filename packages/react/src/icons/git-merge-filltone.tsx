import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitMergeIconFilltone = memo(
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
          d="M6.615 8.817A3 3 0 0 0 9.5 11h5.646a3.5 3.5 0 0 0 0 2H9.5a4.98 4.98 0 0 1-3-1.001v3.146a3.5 3.5 0 0 0-2 0V8.855a3.5 3.5 0 0 0 2.115-.037"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
GitMergeIconFilltone.displayName = "GitMergeIconFilltone";
export { GitMergeIconFilltone };
