import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines66PercentIconDuotone = memo(
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
          d="M12 2.714c5.937 0 10.75 4.813 10.75 10.75 0 2.937-1.18 5.599-3.089 7.538a.749.749 0 0 1-.733.27q-.01-.004-.02-.006a.74.74 0 0 1-.367-.2l-.018-.02-2.1-2.1a.75.75 0 1 1 1.06-1.061l1.566 1.565a9.2 9.2 0 0 0 2.168-5.236H19a.75.75 0 0 1 0-1.5h2.217a9.246 9.246 0 0 0-8.462-8.467V6.47a.75.75 0 0 1-1.5 0V4.246a9.2 9.2 0 0 0-5.241 2.168l1.57 1.571a.75.75 0 0 1-1.06 1.06l-1.572-1.57a9.2 9.2 0 0 0-2.169 5.239H5a.75.75 0 0 1 0 1.5H2.783c.16 1.99.947 3.8 2.167 5.236l1.567-1.565a.75.75 0 1 1 1.06 1.06l-2.101 2.1-.017.02a.75.75 0 0 1-.361.199l-.027.008a.75.75 0 0 1-.733-.27 10.72 10.72 0 0 1-3.088-7.538c0-5.937 4.813-10.75 10.75-10.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.622 7.839a.75.75 0 0 1 .932 1.12h-.001l-.002.003-.038.052-.117.159-.421.571c-.351.476-.826 1.12-1.32 1.784-.974 1.31-2.056 2.755-2.379 3.131l-.039.042a1.75 1.75 0 0 1-2.474-2.474l.042-.04c.376-.323 1.82-1.405 3.132-2.38a669 669 0 0 1 2.354-1.74l.158-.117.052-.038.004-.002z"
        />
      </svg>
    ))
);
GaugeLines66PercentIconDuotone.displayName = "GaugeLines66PercentIconDuotone";
export { GaugeLines66PercentIconDuotone };
