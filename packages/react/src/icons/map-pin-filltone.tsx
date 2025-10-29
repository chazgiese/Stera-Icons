import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinIconFilltone = memo(
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
          d="M12 1c4.992 0 9 4.132 9 9.182 0 1.597-.582 3.189-1.374 4.63-.797 1.449-1.847 2.816-2.875 3.985a37 37 0 0 1-3.762 3.683q-.171.144-.266.221l-.073.059q-.011.011-.02.016l-.005.004-.002.002-.006.002a.99.99 0 0 1-1.235 0l-.004-.002-.009-.006-.02-.016-.072-.059q-.095-.076-.266-.22a36.771 36.771 0 0 1-3.762-3.684c-1.028-1.169-2.078-2.536-2.875-3.985C3.582 13.37 3 11.779 3 10.182 3 5.132 7.008 1 12 1m0 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 6.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
MapPinIconFilltone.displayName = "MapPinIconFilltone";
export { MapPinIconFilltone };
