import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconLinetone = memo(
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
          d="M3.89 2.007c2.194-.244 3.813-.15 5.126.136 1.315.287 2.273.758 3.11 1.178.843.423 1.527.774 2.427.979.888.202 2.042.269 3.762.004C19.662 4.096 21 5.097 21 6.559v8.439c0 1.05-.74 1.993-1.81 2.187-2.056.372-3.568.364-4.82.12-1.25-.244-2.179-.714-3.02-1.137-.844-.424-1.615-.811-2.682-1.054-1.066-.242-2.48-.35-4.558-.119a1 1 0 0 1-.22-1.988c2.248-.25 3.892-.146 5.221.157 1.329.302 2.294.794 3.137 1.218.845.425 1.554.774 2.505.96.948.184 2.2.215 4.08-.125a.22.22 0 0 0 .167-.219v-8.44a.26.26 0 0 0-.102-.204.36.36 0 0 0-.278-.074c-1.911.295-3.326.24-4.51-.03-1.175-.267-2.07-.735-2.88-1.142-.816-.41-1.585-.78-2.64-1.01s-2.45-.328-4.48-.103a1 1 0 0 1-.22-1.988"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M4 2a1 1 0 0 1 1 1v18l-.005.102a1 1 0 0 1-1.99 0L3 21V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
FlagIconLinetone.displayName = "FlagIconLinetone";
export { FlagIconLinetone };
