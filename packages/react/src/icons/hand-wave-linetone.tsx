import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandWaveIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M2.63 16.071a1 1 0 0 1 1.299.558c.297.742 1.273 2.523 2.67 3.571a1 1 0 1 1-1.198 1.6c-1.802-1.352-2.96-3.504-3.33-4.429a1 1 0 0 1 .558-1.3M19.5 1.5c1.347 0 2.475.672 3.24 1.515.754.829 1.261 1.934 1.261 2.985a1 1 0 0 1-2 0c0-.45-.245-1.094-.741-1.64-.484-.532-1.107-.86-1.76-.86a1 1 0 0 1 0-2" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.172 2.39a2.93 2.93 0 0 1 3.993 1.066l2.056 3.543a2.925 2.925 0 0 1 2.886-2.428 2.92 2.92 0 0 1 2.921 2.818l.46 3.03a8.64 8.64 0 0 1-3.842 10.42c-4.158 2.389-9.48.973-11.883-3.17l-3.37-5.805A2.91 2.91 0 0 1 4.336 7.55l-.052-.09a2.91 2.91 0 0 1 1.071-3.985A2.93 2.93 0 0 1 8.133 3.4a2.9 2.9 0 0 1 1.039-1.01m2.263 2.07a.93.93 0 0 0-1.267-.336.91.91 0 0 0-.338 1.247l2.888 4.976a1 1 0 1 1-1.73 1.004L7.62 5.546a.93.93 0 0 0-1.268-.336.91.91 0 0 0-.337 1.247l3.61 6.22a1 1 0 0 1-1.73 1.004L5.728 9.95l-.051-.08a.93.93 0 0 0-1.216-.256.91.91 0 0 0-.338 1.247l3.37 5.806c1.848 3.186 5.949 4.282 9.157 2.44a6.645 6.645 0 0 0 2.927-8.098 1 1 0 0 1-.053-.202l-.481-3.17a1 1 0 0 1-.012-.15.92.92 0 0 0-.925-.915.924.924 0 0 0-.925.915v.01l-.03 3.106a1 1 0 0 1-.503.857h.001l.002-.001.002-.001-.009.005-.057.038a3.13 3.13 0 0 0-.852.847c-.186.28-.315.595-.338.949-.022.345.052.8.385 1.374a1 1 0 0 1-1.73 1.004c-.508-.878-.702-1.723-.65-2.507.05-.777.334-1.426.667-1.927.247-.372.526-.674.777-.904z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandWaveIconLinetone.displayName = "HandWaveIconLinetone";
export { HandWaveIconLinetone };
