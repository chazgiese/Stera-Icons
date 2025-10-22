import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesIconLinetone = memo(
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
          d="M18.88 1.393a.125.125 0 0 1 .24 0l.192.633a4 4 0 0 0 2.662 2.662l.633.193a.125.125 0 0 1 0 .239l-.633.192a4 4 0 0 0-2.662 2.662l-.192.633a.125.125 0 0 1-.24 0l-.192-.633a4 4 0 0 0-2.662-2.662l-.633-.192a.125.125 0 0 1 0-.24l.633-.192a4 4 0 0 0 2.662-2.662z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5 4a1 1 0 0 1 .957.709l.741 2.435a7 7 0 0 0 4.658 4.658l2.435.741a1 1 0 0 1 0 1.914l-2.435.741a7 7 0 0 0-4.658 4.658l-.741 2.435a1 1 0 0 1-1.914 0l-.741-2.435a7 7 0 0 0-4.658-4.658l-2.435-.741a1 1 0 0 1 0-1.914l2.435-.741a7 7 0 0 0 4.658-4.658l.741-2.435A1 1 0 0 1 10.5 4m0 4.349A9 9 0 0 1 5.349 13.5a9 9 0 0 1 5.151 5.15 9 9 0 0 1 5.15-5.15 9 9 0 0 1-5.15-5.151"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparklesIconLinetone.displayName = "SparklesIconLinetone";
export { SparklesIconLinetone };
