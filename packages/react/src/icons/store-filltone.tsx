import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StoreIconFilltone = memo(
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
          d="M19.904 11H21v5.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 17.702 3 17.024 3 16.2V11h1.096l.316-.701c.288.13.598.2.921.2h13.334c.323 0 .633-.07.92-.2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.65 14.998c.56 0 .84 0 1.054.11.188.095.341.248.437.436.109.214.11.495.11 1.055V19.2c0 .28-.001.42-.055.527a.5.5 0 0 1-.22.218C13.87 20 13.73 20 13.45 20h-2.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218c-.054-.107-.054-.247-.054-.527V16.6c0-.56 0-.841.109-1.055.096-.188.25-.34.437-.437.214-.108.494-.109 1.054-.109zM17.838 2a4 4 0 0 1 3.795 2.735l1.09 3.27c.207.622.253 1.424-.166 2.143-.8 1.373-2.215 2.35-3.89 2.351-1.34 0-2.508-.623-3.334-1.577-.825.954-1.992 1.577-3.333 1.577-1.34 0-2.508-.623-3.334-1.577-.826.953-1.992 1.577-3.333 1.577-1.674 0-3.089-.978-3.89-2.351-.418-.72-.372-1.521-.165-2.142l1.09-3.27A4 4 0 0 1 6.162 2z"
        />
      </svg>
    ))
);
StoreIconFilltone.displayName = "StoreIconFilltone";
export { StoreIconFilltone };
