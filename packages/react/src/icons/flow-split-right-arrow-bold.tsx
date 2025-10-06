import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightArrowBold = memo(
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
          d="M18.293 1.293a1 1 0 0 1 1.414 0l3 3a.997.997 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 6H17a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a.997.997 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 20H17a5 5 0 0 1-5-5v-2H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H12V9a5 5 0 0 1 5-5h2.586l-1.293-1.293a1 1 0 0 1 0-1.414M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitRightArrowBold.displayName = "FlowSplitRightArrowBold";
export { FlowSplitRightArrowBold };
