import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeftIconBoldDuotone = memo(
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
          <path d="M18 7a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3.5v-1a1 1 0 0 0-1-1H18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5a1 1 0 0 0 1-1V7zM12.729 15.364a1 1 0 0 0-.058.076z" />
        </g>
        <path
          fill="currentColor"
          d="M11.94 2.147c.945-.945 2.56-.276 2.56 1.06V8a1 1 0 0 1-2 0V4.414l-7.409 7.41a.25.25 0 0 0 0 .353l7.41 7.409V16a1 1 0 1 1 2 0v4.793c0 1.336-1.616 2.005-2.561 1.06l-8.263-8.262a2.25 2.25 0 0 1 0-3.182z"
        />
      </svg>
    ))
);
ArrowBigLeftIconBoldDuotone.displayName = "ArrowBigLeftIconBoldDuotone";
export { ArrowBigLeftIconBoldDuotone };
