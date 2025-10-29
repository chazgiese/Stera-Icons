import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersSimpleIcon = memo(
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
          d="M9.726 3.387a4.75 4.75 0 0 1 4.548 0l7.074 3.857c1.39.758 1.39 2.754 0 3.512L19.065 12l2.283 1.244c1.39.758 1.39 2.754 0 3.512l-7.074 3.857a4.75 4.75 0 0 1-4.548 0l-7.074-3.857c-1.389-.758-1.389-2.754 0-3.512L4.934 12l-2.282-1.244c-1.389-.758-1.389-2.754 0-3.512zm4.548 11.226a4.75 4.75 0 0 1-4.548 0l-3.227-1.76-3.128 1.709a.5.5 0 0 0 0 .877l7.072 3.858c.97.53 2.144.53 3.114 0l7.072-3.858a.5.5 0 0 0 0-.877L17.5 12.854zm-.717-9.91a3.25 3.25 0 0 0-3.114 0L3.371 8.562a.5.5 0 0 0 0 .877l7.072 3.858c.97.53 2.144.53 3.114 0l7.072-3.858a.5.5 0 0 0 0-.877z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersSimpleIcon.displayName = "LayersSimpleIcon";
export { LayersSimpleIcon };
