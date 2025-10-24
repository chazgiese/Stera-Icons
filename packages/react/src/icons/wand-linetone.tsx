import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WandIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M18.293 18.293a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM3.293 3.293a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M19.293 3.293a1 1 0 1 1 1.414 1.414l-1 1a1 1 0 1 1-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.792 6.793a1 1 0 0 1 1.196-.165l2.155 1.207a3.8 3.8 0 0 0 3.714 0l2.154-1.207.151-.07a1.001 1.001 0 0 1 1.21 1.43l-1.206 2.156a3.8 3.8 0 0 0 0 3.713l1.206 2.154a1 1 0 0 1-1.361 1.361l-2.154-1.205a3.8 3.8 0 0 0-3.569-.076q-.025.017-.052.033l-1.026.57a9 9 0 0 0-1.977 1.486l-.003.006-3.522 3.521a1 1 0 0 1-1.594-.242 1 1 0 0 1 .179-1.172l3.552-3.552a9 9 0 0 0 1.459-1.936l.545-.975a3.8 3.8 0 0 0-.015-3.686L6.627 7.988a1 1 0 0 1 .165-1.195m7.27 3.144a5.8 5.8 0 0 1-4.124 0 5.8 5.8 0 0 1 0 4.125 5.8 5.8 0 0 1 4.125 0 5.8 5.8 0 0 1 0-4.125"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WandIconLinetone.displayName = "WandIconLinetone";
export { WandIconLinetone };
