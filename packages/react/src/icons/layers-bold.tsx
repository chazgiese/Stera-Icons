import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconBold = memo(
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
          d="M9.48 2.311a5 5 0 0 1 5.04 0l8.134 4.745c1.487.869 1.487 3.019 0 3.887L20.842 12l1.812 1.057c1.487.869 1.487 3.019 0 3.887l-8.134 4.745a5 5 0 0 1-5.04 0l-8.133-4.745c-1.488-.868-1.488-3.018 0-3.887L3.157 12l-1.81-1.056c-1.488-.868-1.488-3.018 0-3.887zm5.04 13.377a5 5 0 0 1-5.04 0l-4.337-2.531-2.788 1.627a.25.25 0 0 0 0 .432l8.134 4.745c.934.545 2.089.545 3.023 0l8.134-4.745a.25.25 0 0 0 0-.432l-2.79-1.627zm-1.008-11.65a3 3 0 0 0-3.024 0L2.356 8.785a.25.25 0 0 0 0 .432l8.134 4.745c.934.544 2.089.545 3.023 0l8.134-4.745a.25.25 0 0 0 0-.432z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.48 2.312a5 5 0 0 1 5.04 0l8.134 4.745c1.487.868 1.487 3.018 0 3.887l-1.812 1.055 1.812 1.058c1.487.868 1.487 3.018 0 3.887l-8.134 4.745a5 5 0 0 1-5.04 0l-8.133-4.745c-1.488-.869-1.488-3.019 0-3.887l1.81-1.058-1.81-1.055c-1.488-.869-1.488-3.019 0-3.887zm5.04 13.377a5 5 0 0 1-5.04 0l-4.337-2.531-2.788 1.627a.25.25 0 0 0 0 .431l8.134 4.745a3 3 0 0 0 3.023 0l8.134-4.745a.25.25 0 0 0 0-.431l-2.79-1.627zm-1.008-11.65a3 3 0 0 0-3.023 0L2.355 8.784a.25.25 0 0 0 0 .432l8.134 4.745a3 3 0 0 0 3.023 0l8.134-4.745a.25.25 0 0 0 0-.432z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIconBold.displayName = "LayersIconBold";
export { LayersIconBold };
