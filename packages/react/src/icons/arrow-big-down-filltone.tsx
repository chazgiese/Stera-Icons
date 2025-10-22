import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigDownIconFilltone = memo(
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
          d="M14 3a3 3 0 0 1 3 3v3.5h3.793c1.336 0 2.005 1.616 1.06 2.56l-8.262 8.263a2.25 2.25 0 0 1-3.182 0L2.147 12.06c-.945-.944-.276-2.56 1.06-2.56H7V6a3 3 0 0 1 3-3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M7 9.5a1 1 0 0 1 0 2H4.414l7.41 7.41a.25.25 0 0 0 .353 0l7.409-7.41H17a1 1 0 1 1 0-2h3.793c1.336 0 2.005 1.616 1.06 2.56l-8.262 8.263a2.25 2.25 0 0 1-3.182 0L2.147 12.06c-.945-.944-.276-2.56 1.06-2.56z"
        />
      </svg>
    ))
);
ArrowBigDownIconFilltone.displayName = "ArrowBigDownIconFilltone";
export { ArrowBigDownIconFilltone };
