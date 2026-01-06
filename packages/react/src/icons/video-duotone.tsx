import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoIconDuotone = memo(
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
        <rect
          width={15}
          height={12}
          x={2}
          y={6}
          stroke="currentColor"
          strokeWidth={1.5}
          rx={3}
        />
        <path
          fill="currentColor"
          d="M21.531 6.414a.75.75 0 0 1 1.211.48L22.75 7v10a.75.75 0 0 1-1.219.586l-3.793-3.034q.014-.59.012-1.352v-.561l3.5 2.8V8.56l-3.5 2.8V10.8c0-.51-.002-.958-.012-1.353z"
          opacity={0.4}
        />
      </svg>
    ))
);
VideoIconDuotone.displayName = "VideoIconDuotone";
export { VideoIconDuotone };
