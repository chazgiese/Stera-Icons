import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeviceLaptopIconDuotone = memo(
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
          d="M20.75 14.987q.12.167.198.363l1.2 3a1.75 1.75 0 0 1-1.624 2.4H3.478a1.75 1.75 0 0 1-1.625-2.4l1.2-3q.079-.195.197-.362V15c0 .414.336.75.75.75h.677a.25.25 0 0 0-.232.157l-1.2 3a.25.25 0 0 0 .233.343h17.046a.25.25 0 0 0 .231-.343l-1.2-3a.25.25 0 0 0-.232-.157H20a.75.75 0 0 0 .75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.8 3.25c.547 0 1.004-.001 1.375.03.38.03.736.098 1.073.27.517.263.938.685 1.202 1.202.172.337.24.693.27 1.073.031.371.03.828.03 1.375V15a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V7.2c0-.547-.001-1.004.03-1.375.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 4.752 3.55c.337-.172.693-.24 1.073-.27.371-.031.828-.03 1.375-.03zm-9.6 1.5c-.572 0-.957 0-1.253.024-.287.024-.424.067-.514.113a1.25 1.25 0 0 0-.546.546c-.046.09-.09.227-.113.514-.024.296-.024.68-.024 1.253v7.05h14.5V7.2c0-.572 0-.957-.024-1.253-.024-.287-.067-.424-.113-.514a1.25 1.25 0 0 0-.546-.546c-.09-.046-.227-.09-.514-.113-.296-.024-.68-.024-1.253-.024z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DeviceLaptopIconDuotone.displayName = "DeviceLaptopIconDuotone";
export { DeviceLaptopIconDuotone };
