import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersBold = memo(
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
          d="M9.48 2.311a5 5 0 0 1 5.039 0l8.134 4.745c1.488.869 1.488 3.019 0 3.887L20.84 12l1.812 1.056c1.488.869 1.488 3.019 0 3.887l-8.134 4.745a5 5 0 0 1-5.038 0l-8.134-4.745c-1.488-.868-1.488-3.018 0-3.887L3.157 12l-1.81-1.057c-1.488-.868-1.488-3.018 0-3.887zm5.039 13.377a5 5 0 0 1-5.038 0l-4.339-2.531-2.787 1.627a.25.25 0 0 0 0 .432l8.134 4.745a3 3 0 0 0 3.023 0l8.133-4.745a.25.25 0 0 0 0-.432l-2.788-1.627zm-1.007-11.65a3 3 0 0 0-3.023 0L2.355 8.785a.25.25 0 0 0 0 .432l8.134 4.745a3 3 0 0 0 3.023 0l8.133-4.745a.25.25 0 0 0 0-.432z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersBold.displayName = "LayersBold";
export { LayersBold };
