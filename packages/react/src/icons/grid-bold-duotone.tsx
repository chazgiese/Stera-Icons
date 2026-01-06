import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GridIconBoldDuotone = memo(
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
          d="M16.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v8.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H7.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C1.999 17.702 2 17.024 2 16.2V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C6.298 1.999 6.976 2 7.8 2zM7.8 4c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C4 6.361 4 6.942 4 7.8v8.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C6.361 20 6.942 20 7.8 20h8.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 0 0 .873-.875c.08-.156.145-.38.18-.82.038-.45.038-1.031.038-1.888V7.8c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C17.639 4 17.058 4 16.2 4z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 8h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4H8v-4H4v-2h4v-4H4V8h4V4h2zm0 6h4v-4h-4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GridIconBoldDuotone.displayName = "GridIconBoldDuotone";
export { GridIconBoldDuotone };
