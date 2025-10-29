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
          d="M3.903 2.005c2.188-.242 3.803-.147 5.114.138 1.315.287 2.273.757 3.11 1.178.842.423 1.526.774 2.426.979.888.201 2.042.269 3.762.004C19.662 4.096 21 5.097 21 6.558v8.44c0 1.05-.74 1.992-1.81 2.186-2.056.372-3.568.365-4.82.12-1.25-.243-2.179-.713-3.02-1.136-.844-.424-1.615-.811-2.682-1.054-.906-.206-2.064-.313-3.668-.2v-2.003c1.695-.11 3.01.003 4.111.253 1.329.302 2.294.794 3.137 1.218.845.425 1.555.774 2.505.96.948.184 2.2.215 4.081-.125a.22.22 0 0 0 .166-.22V6.559a.26.26 0 0 0-.102-.204.36.36 0 0 0-.278-.074c-1.91.295-3.326.24-4.51-.03-1.174-.267-2.07-.735-2.88-1.142-.816-.41-1.585-.78-2.64-1.01-.894-.195-2.03-.294-3.59-.183V3a1 1 0 0 0-1.097-.995"
          opacity={0.4}
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
