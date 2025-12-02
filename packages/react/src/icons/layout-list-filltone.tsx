import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayoutListIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.6 13c.403 0 .767-.001 1.067.023.312.026.643.084.968.25a2.5 2.5 0 0 1 1.092 1.092c.166.325.224.656.25.968.024.3.023.664.023 1.067v2.2c0 .403.001.767-.023 1.067a2.5 2.5 0 0 1-.25.968 2.5 2.5 0 0 1-1.092 1.092 2.5 2.5 0 0 1-.968.25C8.367 22 8.003 22 7.6 22H5.4c-.403 0-.767.001-1.067-.023a2.5 2.5 0 0 1-.968-.25 2.5 2.5 0 0 1-1.093-1.092 2.5 2.5 0 0 1-.249-.968C2 19.367 2 19.003 2 18.6v-2.2c0-.403-.001-.767.023-1.067.026-.312.084-.643.25-.968.24-.47.622-.853 1.092-1.092.325-.166.656-.224.968-.25C4.633 13 4.997 13 5.4 13zM7.6 2c.403 0 .767-.001 1.067.023.312.026.643.084.968.25a2.5 2.5 0 0 1 1.092 1.092c.166.325.224.656.25.968.024.3.023.664.023 1.067v2.2c0 .403.001.767-.023 1.067a2.5 2.5 0 0 1-.25.968 2.5 2.5 0 0 1-1.092 1.092 2.5 2.5 0 0 1-.968.25C8.367 11 8.003 11 7.6 11H5.4c-.403 0-.767.001-1.067-.023a2.5 2.5 0 0 1-.968-.25 2.5 2.5 0 0 1-1.093-1.092 2.5 2.5 0 0 1-.249-.968C2 8.367 2 8.003 2 7.6V5.4c0-.403-.001-.767.023-1.067.026-.312.084-.643.25-.968.24-.47.622-.853 1.092-1.093.325-.165.656-.223.968-.249C4.633 2 4.997 2 5.4 2z" />
        </g>
        <path
          fill="currentColor"
          d="M21 19a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 14a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 8a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 3a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
LayoutListIconFilltone.displayName = "LayoutListIconFilltone";
export { LayoutListIconFilltone };
