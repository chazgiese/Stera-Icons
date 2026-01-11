import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalIconDuotone = memo(
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
          d="M10.547 11.435a5.73 5.73 0 0 0-1.762.797L7.322 11.5H7.25v-.036l-1.817-.908c-.593-.297-1.054-.517-1.398-.868A2.75 2.75 0 0 1 3.4 8.66c-.16-.464-.15-.974-.15-1.638V5.2c0-.547-.001-1.004.03-1.375.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 4.752 1.55c.337-.172.693-.24 1.073-.27.371-.031.827-.03 1.375-.03h9.6c.547 0 1.004-.001 1.375.03.38.03.736.098 1.073.27.517.263.938.685 1.202 1.202.172.337.24.693.27 1.073.03.371.03.828.03 1.375v1.822c0 .664.01 1.174-.15 1.638-.133.385-.35.737-.635 1.028-.344.351-.805.571-1.399.868l-1.816.908v.036h-.072l-1.464.731a5.7 5.7 0 0 0-1.763-.795l1.799-.9V2.75h-6.5v7.786zM7.2 2.75c-.572 0-.957 0-1.253.024-.287.024-.424.067-.515.113a1.25 1.25 0 0 0-.545.546c-.047.09-.09.227-.113.514-.024.296-.024.68-.024 1.253v1.822c0 .773.01.98.068 1.15.06.175.16.334.29.467.125.128.306.23.996.575l1.146.572V2.75zm9.55 7.036 1.145-.572c.69-.345.872-.447.997-.575a1.25 1.25 0 0 0 .29-.467c.058-.17.068-.377.068-1.15V5.2c0-.572 0-.957-.024-1.253-.024-.287-.067-.424-.113-.514a1.25 1.25 0 0 0-.546-.546c-.09-.046-.227-.09-.514-.113-.296-.024-.681-.024-1.253-.024h-.05z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 11.25A5.753 5.753 0 0 1 17.75 17 5.75 5.75 0 1 1 12 11.25m0 1.5A4.245 4.245 0 0 0 7.75 17 4.25 4.25 0 1 0 12 12.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MedalIconDuotone.displayName = "MedalIconDuotone";
export { MedalIconDuotone };
