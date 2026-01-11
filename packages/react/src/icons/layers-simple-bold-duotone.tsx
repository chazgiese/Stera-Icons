import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersSimpleIconBoldDuotone = memo(
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
          d="M6.498 13.138 3.49 14.78a.25.25 0 0 0 0 .44l7.073 3.857a3 3 0 0 0 2.873 0l7.073-3.857a.25.25 0 0 0 0-.44L17.5 13.14 19.587 12l1.88 1.024c1.563.853 1.563 3.099 0 3.952l-7.073 3.857a5 5 0 0 1-4.79 0l-7.071-3.857c-1.563-.853-1.563-3.099 0-3.952L4.41 12z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.606 3.167a5 5 0 0 1 4.789 0l7.072 3.857c1.563.853 1.563 3.099 0 3.951l-7.072 3.858a5 5 0 0 1-4.79 0l-7.072-3.858c-1.563-.852-1.563-3.098 0-3.95zm3.83 1.756a3 3 0 0 0-2.872 0L3.49 8.78a.25.25 0 0 0 0 .44l7.073 3.857a3 3 0 0 0 2.873 0L20.51 9.22a.25.25 0 0 0 0-.44z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersSimpleIconBoldDuotone.displayName = "LayersSimpleIconBoldDuotone";
export { LayersSimpleIconBoldDuotone };
