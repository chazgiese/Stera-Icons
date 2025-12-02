import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock10IconLinetone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.031.243 1 1 0 0 1-.213.41l-.026.028q-.02.021-.04.04l-.03.028a1 1 0 0 1-.124.094l-.034.02a1 1 0 0 1-.324.12l-.04.006a1 1 0 0 1-.118.01L12 13l-.009-.001-.077-.004h-.02l-.081-.014q-.01 0-.019-.004a1 1 0 0 1-.154-.045l-.037-.015a1 1 0 0 1-.104-.05l-3.464-2a1 1 0 0 1 1-1.733L11 10.268V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock10IconLinetone.displayName = "Clock10IconLinetone";
export { Clock10IconLinetone };
