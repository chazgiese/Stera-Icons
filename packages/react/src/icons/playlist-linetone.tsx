import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlaylistIconLinetone = memo(
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
          d="M15 12.895c0-1.1 1.13-1.8 2.096-1.377l.19.1 5.046 3.105a1.5 1.5 0 0 1 0 2.554l-5.046 3.106A1.5 1.5 0 0 1 15 19.106zm2 5.315L20.592 16 17 13.79z"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 7a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
        </g>
      </svg>
    ))
);
PlaylistIconLinetone.displayName = "PlaylistIconLinetone";
export { PlaylistIconLinetone };
