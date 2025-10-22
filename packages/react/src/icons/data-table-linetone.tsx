import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DataTableIconLinetone = memo(
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
          d="M17.2 3c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v6.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H9v-2h8.2c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 0 0 .873-.875c.08-.156.145-.38.18-.82.03-.362.035-.812.036-1.422H9v-2h12v-3.332H9v-2h11.998a19 19 0 0 0-.035-1.423c-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C18.639 5 18.058 5 17.2 5H9V3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 21H6.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 16.702 1 16.024 1 15.2V8.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 2.999 5.976 3 6.8 3H9zm-5.998-5.334c.001.61.005 1.06.035 1.423.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C5.361 19 5.942 19 6.8 19H7v-3.334zm-.002-2h4v-3.332H3zM6.8 5c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82-.03.362-.035.812-.036 1.422H7V5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DataTableIconLinetone.displayName = "DataTableIconLinetone";
export { DataTableIconLinetone };
