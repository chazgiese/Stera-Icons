import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeviceDesktopIconFilled = memo(
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
          d="M16.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v3.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044h-.127c.142 1.089.46 2.299.682 3.057.279.95-.423 1.943-1.448 1.943H8.693c-1.025 0-1.727-.992-1.448-1.943.222-.758.54-1.968.682-3.057H7.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C1.999 12.702 2 12.024 2 11.2V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C6.298 1.999 6.976 2 7.8 2zM9.938 17c-.116 1.06-.38 2.181-.601 3h5.326c-.22-.819-.485-1.94-.601-3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DeviceDesktopIconFilled.displayName = "DeviceDesktopIconFilled";
export { DeviceDesktopIconFilled };
