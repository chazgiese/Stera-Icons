import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigDownIconFillDuotone = memo(
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
          d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4h3.793c1.336 0 2.005 1.616 1.06 2.56l-8.262 8.263a2.25 2.25 0 0 1-3.182 0L2.147 12.06c-.945-.944-.276-2.56 1.06-2.56H7v-4A2.5 2.5 0 0 1 9.5 3zm-5 2a.5.5 0 0 0-.5.5v5a1 1 0 0 1-1 1H4.414l7.41 7.41a.25.25 0 0 0 .353 0l7.409-7.41H16a1 1 0 0 1-1-1v-5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M14.5 5a.5.5 0 0 1 .5.5v5a1 1 0 0 0 1 1h3.586l-7.41 7.41a.25.25 0 0 1-.353 0L4.414 11.5H8a1 1 0 0 0 1-1v-5a.5.5 0 0 1 .5-.5z"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowBigDownIconFillDuotone.displayName = "ArrowBigDownIconFillDuotone";
export { ArrowBigDownIconFillDuotone };
