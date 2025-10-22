import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LockPasswordIconFilled = memo(
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
          d="M12 1a6 6 0 0 1 6 6v2.15c.283.062.554.152.816.286a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v2.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.024 3 17.2v-2.4c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.262-.134.533-.224.816-.286V7a6 6 0 0 1 6-6M8 14.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 3a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LockPasswordIconFilled.displayName = "LockPasswordIconFilled";
export { LockPasswordIconFilled };
