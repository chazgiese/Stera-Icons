import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SelectFieldIconFillDuotone = memo(
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
          d="M17.2 5c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v2.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H6.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 14.702 1 14.024 1 13.2v-2.4c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 4.999 5.976 5 6.8 5zm2.059 5.6a1 1 0 0 0-1.41-.109l-1.099.944-1.1-.944a1 1 0 0 0-1.3 1.518l1.75 1.5.072.056a1 1 0 0 0 1.228-.056l1.75-1.5a1 1 0 0 0 .109-1.41M5.5 11a1 1 0 0 0 0 2H11a1 1 0 0 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.85 10.492a.999.999 0 1 1 1.3 1.517l-1.75 1.5a1 1 0 0 1-1.228.057l-.072-.057-1.75-1.5a1 1 0 1 1 1.3-1.517l1.1.943zM11 11a1 1 0 1 1 0 2H5.5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
SelectFieldIconFillDuotone.displayName = "SelectFieldIconFillDuotone";
export { SelectFieldIconFillDuotone };
