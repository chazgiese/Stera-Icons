import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeftIconLinetone = memo(
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
          d="M18 7a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4.5a1 1 0 1 1 0-2H18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5a1 1 0 1 1 0-2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M11.94 2.147c.945-.945 2.56-.276 2.56 1.06V8a1 1 0 0 1-2 0V4.414l-7.409 7.41a.25.25 0 0 0 0 .353l7.41 7.409V16a1 1 0 1 1 2 0v4.793c0 1.336-1.616 2.005-2.561 1.06l-8.263-8.262a2.25 2.25 0 0 1 0-3.182z"
        />
      </svg>
    ))
);
ArrowBigLeftIconLinetone.displayName = "ArrowBigLeftIconLinetone";
export { ArrowBigLeftIconLinetone };
