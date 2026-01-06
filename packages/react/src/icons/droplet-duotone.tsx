import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletIconDuotone = memo(
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
          d="m12.404 1.368.063.045.003.002.024.02.07.057q.093.076.263.219a36.526 36.526 0 0 1 3.736 3.657c1.022 1.16 2.059 2.513 2.844 3.94.782 1.422 1.343 2.971 1.343 4.51 0 4.764-3.662 8.68-8.299 8.92L12 22.75v-1.5c3.988 0 7.25-3.311 7.25-7.432 0-1.188-.44-2.48-1.157-3.786-.715-1.299-1.678-2.56-2.656-3.673A35 35 0 0 0 12 2.978l.14-.12q.16-.135.245-.205l.063-.05.015-.013.004-.003a.75.75 0 0 0-.09-1.233z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.533 1.413a.75.75 0 1 1 .934 1.174l-.004.003-.015.013-.063.05q-.086.07-.245.204A35.01 35.01 0 0 0 8.564 6.36c-.98 1.113-1.942 2.374-2.657 3.673-.718 1.306-1.157 2.598-1.157 3.786 0 4.12 3.262 7.432 7.25 7.432v1.5c-4.848 0-8.75-4.015-8.75-8.932 0-1.539.561-3.088 1.343-4.51.785-1.427 1.822-2.78 2.844-3.94a36.5 36.5 0 0 1 3.998-3.876l.07-.057.025-.02h.002z"
        />
      </svg>
    ))
);
DropletIconDuotone.displayName = "DropletIconDuotone";
export { DropletIconDuotone };
