import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationLeftIconDuotone = memo(
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
          <path d="M5.812 5.813a.75.75 0 0 1 1.06 1.06A7.251 7.251 0 0 0 12 19.25h1.19l.75.75-.75.75H12A8.75 8.75 0 0 1 5.812 5.813M12.324 3.256a8.75 8.75 0 0 1 5.863 14.932.75.75 0 0 1-1.06-1.061 7.25 7.25 0 0 0-4.859-12.372L12 4.75h-1.19L10.06 4l.75-.75H12z" />
        </g>
        <path
          fill="currentColor"
          d="M11.47 16.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L13.94 20l-2.47-2.47a.75.75 0 0 1 0-1.06M11.47.47a.75.75 0 1 1 1.06 1.06L10.06 4l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z"
        />
      </svg>
    ))
);
RotationLeftIconDuotone.displayName = "RotationLeftIconDuotone";
export { RotationLeftIconDuotone };
