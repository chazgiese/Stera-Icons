import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BuildingIconFilltone = memo(
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
          d="M17.172.003q.27.003.495.02c.312.026.643.084.968.25a2.5 2.5 0 0 1 1.092 1.092c.166.325.224.656.25.968.024.3.023.664.023 1.067v17.2c0 .403.001.767-.023 1.067a2.5 2.5 0 0 1-.25.968 2.5 2.5 0 0 1-1.092 1.092 2.5 2.5 0 0 1-.968.25c-.3.024-.664.023-1.067.023H7.4c-.403 0-.767.001-1.067-.023a2.5 2.5 0 0 1-.968-.25 2.5 2.5 0 0 1-1.093-1.092 2.5 2.5 0 0 1-.249-.968C4 21.367 4 21.003 4 20.6V3.4c0-.403-.001-.767.023-1.067.026-.312.084-.643.25-.968.24-.47.622-.853 1.092-1.093.325-.165.656-.223.968-.249C6.633 0 6.997 0 7.4 0h9.2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M14 18a1 1 0 0 1 1 1v3H9v-3a1 1 0 0 1 1-1zM10.103 11.505A1 1 0 0 1 11 12.5v.5l-.005.102A1 1 0 0 1 10 14h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.5zM14.603 11.505a1 1 0 0 1 .897.995v.5l-.005.102A1 1 0 0 1 14.5 14H14a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.5zM10.103 8.005A1 1 0 0 1 11 9v.5l-.005.103A1 1 0 0 1 10 10.5h-.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.5zM14.603 8.005A1 1 0 0 1 15.5 9v.5l-.005.103a1 1 0 0 1-.995.897H14a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.5zM10.103 4.505A1 1 0 0 1 11 5.5V6l-.005.103A1 1 0 0 1 10 7h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.5zM14.603 4.505a1 1 0 0 1 .897.995V6l-.005.103A1 1 0 0 1 14.5 7H14a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.5z"
        />
      </svg>
    ))
);
BuildingIconFilltone.displayName = "BuildingIconFilltone";
export { BuildingIconFilltone };
