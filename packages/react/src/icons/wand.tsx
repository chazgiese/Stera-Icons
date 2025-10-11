import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WandIcon = memo(
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
          d="M12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.247 6.794a.75.75 0 0 1 .907 1.073l-1.206 2.154a4.05 4.05 0 0 0 0 3.957l1.206 2.156a.75.75 0 0 1-1.02 1.02l-2.155-1.207a4.05 4.05 0 0 0-3.8-.083l-.065.042-1.025.569c-.745.414-1.43.93-2.034 1.53l-.002.004L3.53 21.53a.752.752 0 0 1-1.267-.386.76.76 0 0 1 .206-.674l3.547-3.548a9.3 9.3 0 0 0 1.504-1.995l.53-.948a4.05 4.05 0 0 0 0-3.958L6.847 7.867a.75.75 0 0 1 1.02-1.02l2.155 1.205c1.229.688 2.73.688 3.958 0l2.155-1.205zm-1.685 2.644a5.54 5.54 0 0 1-5.124 0c.829 1.59.834 3.48.022 5.076q-.008.022-.018.044a5.55 5.55 0 0 1 5.12.002 5.55 5.55 0 0 1 0-5.123"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.47 18.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM3.47 3.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M19.47 3.47a.75.75 0 1 1 1.06 1.06l-1 1a.75.75 0 1 1-1.06-1.06z"
        />
      </svg>
    ))
);
WandIcon.displayName = "WandIcon";
export { WandIcon };
