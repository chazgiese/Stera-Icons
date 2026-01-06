import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WandIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M18.47 18.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM3.47 3.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M19.47 3.47a.75.75 0 1 1 1.06 1.06l-1 1a.75.75 0 1 1-1.06-1.06z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.247 6.794a.75.75 0 0 1 .907 1.073l-1.206 2.154a4.05 4.05 0 0 0 0 3.958l1.206 2.155a.75.75 0 0 1-1.02 1.02l-2.155-1.207a4.05 4.05 0 0 0-3.8-.082l-.065.041-1.025.569c-.746.414-1.43.93-2.034 1.531l-.002.003L3.53 21.53l-.058.052a.75.75 0 0 1-.617.154.75.75 0 0 1-.551-.454.75.75 0 0 1 .165-.812l3.537-3.537a9.3 9.3 0 0 0 1.514-2.006l.535-.954a4.05 4.05 0 0 0-.003-3.952L6.846 7.867a.75.75 0 0 1 1.02-1.02l2.155 1.205a4.05 4.05 0 0 0 3.958 0l2.155-1.205zM14.56 9.438a5.54 5.54 0 0 1-5.123 0c.829 1.59.834 3.48.022 5.076q-.008.023-.018.044a5.55 5.55 0 0 1 5.12.003 5.55 5.55 0 0 1 0-5.123"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WandIconDuotone.displayName = "WandIconDuotone";
export { WandIconDuotone };
