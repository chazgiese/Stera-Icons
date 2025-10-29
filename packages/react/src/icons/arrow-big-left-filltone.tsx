import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeftIconFilltone = memo(
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
          d="M12.5 7a1 1 0 0 0 2 0H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4.5a1 1 0 0 0-2 0v2.586l-7.409-7.41a.25.25 0 0 1 0-.353l7.41-7.409z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.94 2.147c.945-.945 2.56-.276 2.56 1.06V7a1 1 0 0 1-2 0V4.414l-7.409 7.41a.25.25 0 0 0 0 .353l7.41 7.409V17a1 1 0 1 1 2 0v3.793c0 1.336-1.616 2.005-2.561 1.06l-8.263-8.262a2.25 2.25 0 0 1 0-3.182z"
        />
      </svg>
    ))
);
ArrowBigLeftIconFilltone.displayName = "ArrowBigLeftIconFilltone";
export { ArrowBigLeftIconFilltone };
