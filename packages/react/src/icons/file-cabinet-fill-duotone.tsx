import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FileCabinetIconFillDuotone = memo(
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
          <path d="M21 17.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.024 3 17.2V13h18zm-11-1.7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM15.2 1c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052V11H3V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.298.999 7.976 1 8.8 1zM10 5a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M14 15.5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM21 13H3v-2h18zM14 5a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
FileCabinetIconFillDuotone.displayName = "FileCabinetIconFillDuotone";
export { FileCabinetIconFillDuotone };
