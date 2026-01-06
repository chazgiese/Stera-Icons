import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinMinusIconFillDuotone = memo(
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
          d="M12 1c4.992 0 9 4.132 9 9.182 0 1.597-.582 3.189-1.374 4.63-.797 1.449-1.847 2.816-2.875 3.985a37 37 0 0 1-3.762 3.683q-.171.144-.266.221l-.073.059q-.011.011-.02.016l-.005.004-.002.002h-.003a.99.99 0 0 1-1.241 0h-.002l-.002-.002-.006-.004-.02-.016-.072-.059q-.095-.076-.266-.22a36.771 36.771 0 0 1-3.762-3.684c-1.028-1.169-2.078-2.536-2.875-3.985C3.582 13.37 3 11.779 3 10.182 3 5.132 7.008 1 12 1M9 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
MapPinMinusIconFillDuotone.displayName = "MapPinMinusIconFillDuotone";
export { MapPinMinusIconFillDuotone };
