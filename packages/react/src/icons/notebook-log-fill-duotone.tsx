import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NotebookLogIconFillDuotone = memo(
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
          d="M15.2 1c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v10.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564-.03-.36-.037-.776-.04-1.252H5a1 1 0 1 0 0-2H3v-3h2a1 1 0 1 0 0-2H3V8h2a1 1 0 1 0 0-2H3.004c.003-.476.01-.891.04-1.252.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.298.999 7.976 1 8.8 1zM10 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5 16a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM13 12a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM5 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2h-6a1 1 0 0 1 0-2zM5 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
NotebookLogIconFillDuotone.displayName = "NotebookLogIconFillDuotone";
export { NotebookLogIconFillDuotone };
