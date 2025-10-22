import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeviceLaptopIconBold = memo(
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
          d="M16.8 3c.543 0 1.011-.001 1.395.03.395.033.789.105 1.167.297a3 3 0 0 1 1.31 1.31c.193.379.265.772.297 1.168.032.383.03.852.03 1.395v7.712q.106.162.18.345l1.2 3A2 2 0 0 1 20.523 21H3.477a2 2 0 0 1-1.857-2.743l1.2-3q.074-.182.18-.344V7.2c0-.543-.002-1.012.03-1.395.032-.395.104-.79.297-1.167a3 3 0 0 1 1.31-1.31c.378-.194.772-.265 1.167-.298C6.188 3 6.656 3 7.2 3zM3.476 19h17.046l-1.2-3H4.676zM7.2 5c-.577 0-.95.001-1.233.024-.27.023-.372.06-.422.085a1 1 0 0 0-.436.437c-.025.05-.063.15-.085.422C5.001 6.25 5 6.624 5 7.2V14h14V7.2c0-.576-.002-.949-.025-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.436-.437c-.05-.025-.151-.062-.422-.085A17 17 0 0 0 16.799 5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.8 3c.543 0 1.011-.001 1.395.03.395.033.789.105 1.167.297a3 3 0 0 1 1.31 1.31c.193.379.265.772.297 1.168.032.383.03.852.03 1.395v7.712a2 2 0 0 1 .18.345l1.2 3A2 2 0 0 1 20.523 21H3.477a2 2 0 0 1-1.857-2.743l1.2-3q.074-.182.18-.344V7.2c0-.543-.002-1.012.03-1.395.032-.395.104-.79.297-1.167a3 3 0 0 1 1.31-1.31c.378-.194.772-.265 1.167-.298C6.188 3 6.656 3 7.2 3zM3.476 19h17.046l-1.2-3H4.676zM7.2 5c-.577 0-.95.001-1.233.024-.271.023-.372.06-.422.085a1 1 0 0 0-.436.437c-.025.05-.063.15-.085.422C5 6.25 5 6.624 5 7.2V14h14V7.2c0-.576-.002-.949-.025-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.436-.437c-.05-.025-.151-.062-.422-.085A17 17 0 0 0 16.799 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DeviceLaptopIconBold.displayName = "DeviceLaptopIconBold";
export { DeviceLaptopIconBold };
