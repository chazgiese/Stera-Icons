import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlaylistIconDuotone = memo(
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
          <path d="M12 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 7a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.25 12.895c0-.916.942-1.5 1.746-1.147l.16.083 5.045 3.105a1.25 1.25 0 0 1 0 2.129l-5.046 3.105a1.25 1.25 0 0 1-1.905-1.064zm1.5 5.763L21.068 16l-4.318-2.658z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlaylistIconDuotone.displayName = "PlaylistIconDuotone";
export { PlaylistIconDuotone };
