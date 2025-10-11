import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpArrowIcon = memo(
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
          d="m19.076 1.254.067.01h.005q.02.007.041.013c.034.01.068.017.1.03q.044.02.084.046.023.011.044.024.061.04.113.093l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7A4.75 4.75 0 0 1 15 11.75h-2.25v3.574A3.752 3.752 0 0 1 12 22.75a3.75 3.75 0 0 1-.75-7.426V11.75H9A4.75 4.75 0 0 1 4.25 7V3.81L2.53 5.53a.75.75 0 0 1-1.06-1.06l3-3a1 1 0 0 1 .112-.093q.022-.014.044-.024.04-.026.084-.045.048-.02.098-.03.02-.007.042-.013l.008-.001A1 1 0 0 1 5 1.25l.076.004.067.01h.005q.037.01.073.022.035.009.068.022.044.02.084.045.023.011.044.024.061.04.113.093l3 3a.75.75 0 0 1-1.06 1.06L5.75 3.81V7A3.25 3.25 0 0 0 9 10.25h6A3.25 3.25 0 0 0 18.25 7V3.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a1 1 0 0 1 .112-.093q.022-.014.044-.024.04-.026.084-.045.047-.02.098-.03.02-.007.042-.013l.008-.001A1 1 0 0 1 19 1.25zM12 16.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpArrowIcon.displayName = "FlowSplitUpArrowIcon";
export { FlowSplitUpArrowIcon };
