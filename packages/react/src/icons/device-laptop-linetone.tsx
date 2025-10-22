import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeviceLaptopIconLinetone = memo(
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
          d="M16.8 3c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C6.188 3 6.657 3 7.2 3zM7.2 5c-.576 0-.949.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.062.15-.085.422C5.001 6.25 5 6.624 5 7.2V14h14V7.2c0-.576-.001-.949-.024-1.232-.023-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.062-.422-.085A17 17 0 0 0 16.8 5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.323 14a2 2 0 0 1 1.856 1.257l1.2 3A2 2 0 0 1 20.523 21H3.477a2 2 0 0 1-1.857-2.743l1.2-3A2 2 0 0 1 4.676 14zM3.477 19h17.046l-1.2-3H4.676z"
          clipRule="evenodd"
          opacity={0.32}
        />
      </svg>
    ))
);
DeviceLaptopIconLinetone.displayName = "DeviceLaptopIconLinetone";
export { DeviceLaptopIconLinetone };
