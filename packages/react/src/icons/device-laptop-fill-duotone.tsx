import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeviceLaptopIconFillDuotone = memo(
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
          d="M21 14.913q.106.16.18.344l1.31 3.274A1.8 1.8 0 0 1 20.819 21H3.182a1.8 1.8 0 0 1-1.67-2.469l1.309-3.274a2 2 0 0 1 .18-.344V15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.8 3c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C6.188 3 6.657 3 7.2 3z"
        />
      </svg>
    ))
);
DeviceLaptopIconFillDuotone.displayName = "DeviceLaptopIconFillDuotone";
export { DeviceLaptopIconFillDuotone };
