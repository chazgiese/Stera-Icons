import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrewdriverIconDuotone = memo(
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
          d="M14.332 3.523a4.345 4.345 0 0 1 6.145 6.144l-3.813 3.814a.75.75 0 0 1-.53.22h-1.08l-.303 1.515a.75.75 0 0 1-.205.383l-1.695 1.695a.75.75 0 0 1-1.06 0L6.705 12.21a.75.75 0 0 1 0-1.06l1.695-1.695.084-.072a.75.75 0 0 1 .3-.133l1.515-.303v-1.08c0-.198.08-.39.22-.53zm5.084 1.06a2.846 2.846 0 0 0-4.023 0L11.8 8.176v1.385a.75.75 0 0 1-.604.735l-1.896.379-1.003 1.004 4.023 4.023 1.003-1.004.38-1.895a.75.75 0 0 1 .736-.603h1.384l3.593-3.593a2.845 2.845 0 0 0 0-4.024"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m9.778 15.282-6.248 6.25a.751.751 0 0 1-1.06-1.062l6.247-6.25zM10.31 13.69l.006.01-.015-.016zM16.875 6.065a.75.75 0 0 1 1.06 1.06l-2.541 2.542a.75.75 0 1 1-1.06-1.06z"
        />
      </svg>
    ))
);
ScrewdriverIconDuotone.displayName = "ScrewdriverIconDuotone";
export { ScrewdriverIconDuotone };
