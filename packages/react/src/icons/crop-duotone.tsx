import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CropIconDuotone = memo(
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
          d="M14.8 5.25c.547 0 1.004-.001 1.375.03.38.03.736.098 1.073.27.517.263.938.685 1.202 1.202.172.337.24.693.27 1.073.031.371.03.828.03 1.375V22a.75.75 0 0 1-1.5 0V9.2c0-.572 0-.957-.024-1.253-.024-.287-.067-.424-.113-.514a1.25 1.25 0 0 0-.546-.546c-.09-.046-.227-.09-.514-.113-.296-.024-.68-.024-1.253-.024H2a.75.75 0 1 1 0-1.5z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M6.75 6.75v8.05c0 .572 0 .957.024 1.253.024.287.067.424.113.514.12.235.31.427.546.546.09.046.227.09.514.113.296.024.68.024 1.253.024h8.05v1.5H9.2c-.547 0-1.004.001-1.375-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073-.031-.371-.03-.828-.03-1.375V6.75zM22 17.25a.75.75 0 0 1 0 1.5h-3.25v-1.5zM6 1.25a.75.75 0 0 1 .75.75v3.25h-1.5V2A.75.75 0 0 1 6 1.25" />
        </g>
      </svg>
    ))
);
CropIconDuotone.displayName = "CropIconDuotone";
export { CropIconDuotone };
