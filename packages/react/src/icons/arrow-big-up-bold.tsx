import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigUpBold = memo(
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
          d="M10.409 3.677a2.25 2.25 0 0 1 3.182 0l8.262 8.263c.945.945.276 2.56-1.06 2.56H17V18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3.5H3.207c-1.336 0-2.005-1.615-1.06-2.56zm1.768 1.414a.25.25 0 0 0-.354 0l-7.41 7.41H8a1 1 0 0 1 1 1V18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4.5a1 1 0 0 1 1-1h3.586z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigUpBold.displayName = "ArrowBigUpBold";
export { ArrowBigUpBold };
