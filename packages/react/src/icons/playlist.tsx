import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlaylistIcon = memo(
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
          d="M15.25 12.895c0-.917.942-1.5 1.746-1.148l.16.083 5.045 3.105a1.25 1.25 0 0 1 0 2.13l-5.046 3.105a1.25 1.25 0 0 1-1.905-1.065zm1.5 5.762L21.068 16l-4.318-2.658z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 7a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
PlaylistIcon.displayName = "PlaylistIcon";
export { PlaylistIcon };
