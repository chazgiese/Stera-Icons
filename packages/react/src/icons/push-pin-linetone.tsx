import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinIconLinetone = memo(
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
          d="M16.764 2a2.237 2.237 0 0 1 1 4.236l-.625.313a.25.25 0 0 0-.139.223v3.56a.25.25 0 0 0 .111.207l1.887 1.258A2.25 2.25 0 0 1 20 13.669v1.081A2.25 2.25 0 0 1 17.75 17H6.25A2.25 2.25 0 0 1 4 14.75v-1.081a2.25 2.25 0 0 1 1.002-1.872l1.887-1.258A.25.25 0 0 0 7 10.331V6.772a.25.25 0 0 0-.139-.223l-.625-.313a2.237 2.237 0 0 1 1-4.236zM7.236 4a.237.237 0 0 0-.105.447l.625.313A2.25 2.25 0 0 1 9 6.772v3.56a2.25 2.25 0 0 1-1.002 1.871l-1.887 1.258a.25.25 0 0 0-.111.208v1.081c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1.081a.25.25 0 0 0-.111-.208l-1.887-1.258A2.25 2.25 0 0 1 15 10.331V6.772a2.25 2.25 0 0 1 1.244-2.012l.625-.313A.237.237 0 0 0 16.764 4z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-5h2z" />
      </svg>
    ))
);
PushPinIconLinetone.displayName = "PushPinIconLinetone";
export { PushPinIconLinetone };
