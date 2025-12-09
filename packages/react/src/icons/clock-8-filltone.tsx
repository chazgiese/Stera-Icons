import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock8IconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4a1 1 0 0 0-1 1v5.422l-2.965 1.712a1 1 0 0 0 1 1.732l3.464-2 .016-.01a1 1 0 0 0 .33-.324l.013-.022A1 1 0 0 0 13 12V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v6q-.002.18-.06.34l-.008.017a1 1 0 0 1-.339.446l-.013.01q-.031.023-.066.042l-.015.011-3.464 2a1 1 0 0 1-1-1.732L11 11.422V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock8IconFilltone.displayName = "Clock8IconFilltone";
export { Clock8IconFilltone };
