import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WandIconFilltone = memo(
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
          d="M6.792 6.793a1 1 0 0 1 1.196-.165l2.155 1.207a3.8 3.8 0 0 0 3.714 0l2.154-1.207.151-.07a1 1 0 0 1 1.21 1.43l-1.206 2.156a3.8 3.8 0 0 0 0 3.713l1.206 2.154a1.001 1.001 0 0 1-1.361 1.361l-2.154-1.205a3.8 3.8 0 0 0-3.569-.076q-.025.017-.052.033l-1.026.57a9 9 0 0 0-1.976 1.486q-.003.002-.004.006l-3.522 3.521a1 1 0 0 1-1.594-.242 1 1 0 0 1 .18-1.172l3.55-3.552a9 9 0 0 0 1.46-1.936l.54-.968a3.8 3.8 0 0 0-.01-3.693L6.627 7.988a1 1 0 0 1 .165-1.195"
        />
      </svg>
    ))
);
WandIconFilltone.displayName = "WandIconFilltone";
export { WandIconFilltone };
