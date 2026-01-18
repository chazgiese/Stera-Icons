import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigUpIconFillDuotone = memo(
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
          d="M10.41 3.677a2.25 2.25 0 0 1 3.18 0l8.264 8.263c.944.945.275 2.56-1.06 2.56H17v4a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 18.5v-4H3.207c-1.336 0-2.005-1.615-1.06-2.56zm1.767 1.414a.25.25 0 0 0-.354 0l-7.409 7.41H8a1 1 0 0 1 1 1v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a1 1 0 0 1 1-1h3.586z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M11.823 5.09a.25.25 0 0 1 .354 0l7.409 7.41H16a1 1 0 0 0-1 1v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a1 1 0 0 0-1-1H4.414z"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowBigUpIconFillDuotone.displayName = "ArrowBigUpIconFillDuotone";
export { ArrowBigUpIconFillDuotone };
