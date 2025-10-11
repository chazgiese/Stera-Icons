import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DuplicatePlusIconFilled = memo(
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
          d="M11.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.748 1.748c.134.263.224.535.286.819q-.321-.001-.65-.003h-3.4c-.79 0-1.564-.002-2.215.05-.685.057-1.495.188-2.31.603a6 6 0 0 0-2.622 2.622c-.415.815-.546 1.625-.602 2.31C4.998 11.235 5 12.009 5 12.8v3.4q0 .329.003.65a3.4 3.4 0 0 1-.82-.286 4 4 0 0 1-1.747-1.748c-.248-.485-.346-1.002-.392-1.564C1.999 12.702 2 12.024 2 11.2V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C6.298 1.999 6.976 2 7.8 2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.2 7c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v3.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044h-3.4c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C6.999 17.702 7 17.024 7 16.2v-3.4c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C11.298 6.999 11.976 7 12.8 7zm-1.7 3.5a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DuplicatePlusIconFilled.displayName = "DuplicatePlusIconFilled";
export { DuplicatePlusIconFilled };
