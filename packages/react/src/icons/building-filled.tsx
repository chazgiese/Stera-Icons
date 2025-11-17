import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BuildingIconFilled = memo(
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
        <g clipPath="url(#clip0_5055_8122)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.172.003q.27.003.495.02c.312.026.643.084.968.25a2.5 2.5 0 0 1 1.092 1.092c.166.325.224.656.25.968.024.3.023.664.023 1.067v17.2c0 .403.001.767-.023 1.067a2.5 2.5 0 0 1-.25.968 2.5 2.5 0 0 1-1.092 1.092 2.5 2.5 0 0 1-.968.25c-.3.024-.664.023-1.067.023H7.4c-.403 0-.767.001-1.067-.023a2.5 2.5 0 0 1-.968-.25 2.5 2.5 0 0 1-1.093-1.092 2.5 2.5 0 0 1-.249-.968C4 21.367 4 21.003 4 20.6V3.4c0-.403-.001-.767.023-1.067.026-.312.084-.643.25-.968.24-.47.622-.853 1.092-1.093.325-.165.656-.223.968-.249C6.633 0 6.997 0 7.4 0h9.2zM10 18a1 1 0 0 0-1 1v3h6v-3a1 1 0 0 0-1-1zm-.5-6.5a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 .995-.898L11 13v-.5a1 1 0 0 0-.898-.995L10 11.5zm4.5 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 .995-.898L15.5 13v-.5a1 1 0 0 0-.898-.995L14.5 11.5zM9.5 8a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 .995-.897L11 9.5V9a1 1 0 0 0-.898-.995L10 8zM14 8a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 .995-.897L15.5 9.5V9a1 1 0 0 0-.898-.995L14.5 8zM9.5 4.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h.5a1 1 0 0 0 .995-.897L11 6v-.5a1 1 0 0 0-.898-.995L10 4.5zm4.5 0a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h.5a1 1 0 0 0 .995-.897L15.5 6v-.5a1 1 0 0 0-.898-.995L14.5 4.5z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ))
);
BuildingIconFilled.displayName = "BuildingIconFilled";
export { BuildingIconFilled };
