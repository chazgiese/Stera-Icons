import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIcon = memo(
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
          d="M9.607 2.529a4.75 4.75 0 0 1 4.787 0l8.134 4.744c1.322.772 1.322 2.683 0 3.455l-2.183 1.273 2.183 1.272c1.322.772 1.322 2.683 0 3.455l-8.134 4.744a4.75 4.75 0 0 1-4.787 0l-8.134-4.744c-1.323-.772-1.323-2.683 0-3.455l2.182-1.272-2.182-1.273C.15 9.956.15 8.045 1.473 7.273zm4.787 12.943a4.75 4.75 0 0 1-4.787 0l-4.465-2.604-2.913 1.7a.5.5 0 0 0 0 .864l8.134 4.745a3.25 3.25 0 0 0 3.275 0l8.134-4.745a.5.5 0 0 0 0-.863l-2.914-1.701zm-.756-11.648a3.25 3.25 0 0 0-3.275 0L2.229 8.569a.5.5 0 0 0 0 .863l8.134 4.745a3.25 3.25 0 0 0 3.275 0l8.134-4.745a.5.5 0 0 0 0-.863z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.607 2.528a4.75 4.75 0 0 1 4.787 0l8.134 4.744c1.322.772 1.322 2.683 0 3.455L20.345 12l2.183 1.272c1.322.772 1.322 2.683 0 3.455l-8.134 4.744a4.75 4.75 0 0 1-4.787 0l-8.134-4.744c-1.323-.772-1.323-2.683 0-3.455L3.655 12l-2.182-1.273C.15 9.955.15 8.044 1.473 7.272zm4.787 12.943a4.75 4.75 0 0 1-4.787 0l-4.465-2.604-2.913 1.7a.5.5 0 0 0 0 .864l8.134 4.745a3.25 3.25 0 0 0 3.275 0l8.134-4.745a.5.5 0 0 0 0-.863l-2.914-1.701zm-.756-11.648a3.25 3.25 0 0 0-3.275 0L2.229 8.568a.5.5 0 0 0 0 .863l8.134 4.745a3.25 3.25 0 0 0 3.275 0l8.134-4.745a.5.5 0 0 0 0-.863z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIcon.displayName = "LayersIcon";
export { LayersIcon };
