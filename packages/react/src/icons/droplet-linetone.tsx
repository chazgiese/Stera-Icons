import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletIconLinetone = memo(
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
          d="M11.218 1.378a1 1 0 0 1 1.404-.16l.003.002.006.004.02.017.072.058q.095.077.266.221a36.778 36.778 0 0 1 3.762 3.684c1.028 1.168 2.078 2.536 2.875 3.985.792 1.44 1.374 3.032 1.374 4.63C21 18.869 16.991 23 12 23a1 1 0 0 1 0-2c3.845 0 7-3.194 7-7.181 0-1.13-.419-2.38-1.126-3.666-.703-1.278-1.653-2.524-2.625-3.628a35 35 0 0 0-3.792-3.678l-.062-.05-.014-.011-.003-.002a1 1 0 0 1-.16-1.406"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M11.378 1.218a1 1 0 1 1 1.244 1.566q0 0-.003.002l-.014.011-.062.05-.241.201a34.764 34.764 0 0 0-3.55 3.477c-.973 1.104-1.923 2.35-2.626 3.628C5.418 11.439 5 12.689 5 13.819 5 17.806 8.155 21 12 21v2c-4.991 0-9-4.132-9-9.181 0-1.598.582-3.19 1.374-4.63.797-1.45 1.847-2.817 2.875-3.985a37 37 0 0 1 3.762-3.684q.171-.144.266-.22l.073-.06.02-.016.005-.004z"
        />
      </svg>
    ))
);
DropletIconLinetone.displayName = "DropletIconLinetone";
export { DropletIconLinetone };
