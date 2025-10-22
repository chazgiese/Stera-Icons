import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LockOpenIconFilltone = memo(
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
          d="M15.2 9c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v2.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.024 3 17.2v-2.4c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.298 8.999 7.976 9 8.8 9z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 1c1.964 0 3.707.944 4.8 2.4A1 1 0 0 1 15.2 4.6 4 4 0 0 0 8 7v2.002c-.476.003-.891.012-1.252.042A6 6 0 0 0 6 9.15V7a6 6 0 0 1 6-6"
        />
      </svg>
    ))
);
LockOpenIconFilltone.displayName = "LockOpenIconFilltone";
export { LockOpenIconFilltone };
