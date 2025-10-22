import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LockPasswordIconFilltone = memo(
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
          d="M8 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1a6 6 0 0 1 6 6v2.15a6 6 0 0 0-.748-.106c-.36-.03-.776-.04-1.252-.042V7a4 4 0 0 0-8 0v2.002a17 17 0 0 0-1.252.042A6 6 0 0 0 6 9.15V7a6 6 0 0 1 6-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LockPasswordIconFilltone.displayName = "LockPasswordIconFilltone";
export { LockPasswordIconFilltone };
