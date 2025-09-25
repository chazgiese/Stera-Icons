import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightArrow = memo(
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
          d="M18.713 1.306a.75.75 0 0 1 .817.163l3 3a.75.75 0 0 1 .03 1.026q-.014.018-.03.035l-3 3A.75.75 0 0 1 18.25 8V5.75H16.5a2.75 2.75 0 0 0-2.75 2.75c0 1.452-.73 2.733-1.84 3.5a4.24 4.24 0 0 1 1.84 3.5 2.75 2.75 0 0 0 2.75 2.75h1.75V16a.75.75 0 0 1 1.28-.53l3 3a.75.75 0 0 1 .031 1.022l-.03.038-3 3A.75.75 0 0 1 18.25 22v-2.25H16.5a4.25 4.25 0 0 1-4.25-4.25 2.75 2.75 0 0 0-2.75-2.75h-.825a3.75 3.75 0 1 1 0-1.5H9.5a2.75 2.75 0 0 0 2.75-2.75 4.25 4.25 0 0 1 4.25-4.25h1.75V2a.75.75 0 0 1 .463-.694M5 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitRightArrow.displayName = "FlowSplitRightArrow";
export { FlowSplitRightArrow };
