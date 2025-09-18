import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Droplet = memo(
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
          d="M11.533 1.413a.75.75 0 0 1 .826-.071l.108.071.003.002.024.02.07.057q.093.076.263.219a36.526 36.526 0 0 1 3.736 3.657c1.022 1.16 2.059 2.513 2.844 3.94.782 1.422 1.343 2.971 1.343 4.51 0 4.917-3.902 8.932-8.75 8.932s-8.75-4.015-8.75-8.932c0-1.539.561-3.088 1.343-4.51.785-1.427 1.822-2.78 2.844-3.94a36.5 36.5 0 0 1 3.998-3.876l.07-.057.025-.02h.002zm-.278 2.222a35 35 0 0 0-2.692 2.724c-.978 1.113-1.941 2.374-2.656 3.673-.718 1.306-1.157 2.598-1.157 3.786 0 4.12 3.262 7.432 7.25 7.432s7.25-3.311 7.25-7.432c0-1.188-.44-2.48-1.157-3.786-.715-1.299-1.678-2.56-2.656-3.673A35 35 0 0 0 12 2.978c-.198.17-.452.39-.745.657"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Droplet.displayName = "Droplet";
export { Droplet };
