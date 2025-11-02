import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIcon = memo(
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
          d="M5.075 2.154c1.877-.116 3.267.05 4.406.36 1.133.31 1.992.758 2.765 1.146.778.39 1.477.725 2.384.912.905.187 2.06.235 3.723-.021 1.208-.186 2.397.712 2.397 2.008v8.439c0 .934-.657 1.769-1.605 1.94-2.034.369-3.513.358-4.727.122-1.212-.237-2.114-.691-2.956-1.115-.844-.424-1.64-.824-2.74-1.074-.978-.223-2.228-.332-3.972-.188V21a.75.75 0 0 1-1.5 0V4.12c0-1.014.776-1.9 1.825-1.966m4.01 1.808c-.957-.262-2.179-.418-3.917-.31a.46.46 0 0 0-.418.468v9.057c1.806-.139 3.176-.026 4.306.231 1.296.295 2.236.772 3.08 1.196.844.425 1.58.79 2.57.983.985.192 2.27.22 4.172-.124a.47.47 0 0 0 .372-.465v-8.44c0-.302-.295-.582-.668-.525-1.799.277-3.139.239-4.256.008-1.115-.23-1.965-.644-2.754-1.04-.793-.398-1.52-.776-2.486-1.04"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlagIcon.displayName = "FlagIcon";
export { FlagIcon };
