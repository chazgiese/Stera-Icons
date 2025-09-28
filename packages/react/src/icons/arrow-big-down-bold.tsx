import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigDownBold = memo(
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
          d="M14 3a3 3 0 0 1 3 3v3.5h3.793c1.336 0 2.005 1.616 1.06 2.56l-8.262 8.263a2.25 2.25 0 0 1-3.182 0L2.146 12.06c-.944-.944-.275-2.56 1.061-2.56H7V6a3 3 0 0 1 3-3zm-4 2a1 1 0 0 0-1 1v4.5a1 1 0 0 1-1 1H4.414l7.41 7.41a.25.25 0 0 0 .353 0l7.409-7.41H16a1 1 0 0 1-1-1V6a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigDownBold.displayName = "ArrowBigDownBold";
export { ArrowBigDownBold };
