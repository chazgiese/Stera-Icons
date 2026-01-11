import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines85PercentIconFill = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11a10.97 10.97 0 0 1-3.222 7.778 1 1 0 0 1-.707.293H4.93c-.265 0-.52-.105-.707-.293A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11M7.754 17.709a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.061a1 1 0 0 0 0-1.414m9.906 0a1 1 0 0 0-1.414 1.414l1.06 1.06a1 1 0 0 0 1.415-1.413zM12 11.464a2 2 0 1 0 .077 3.997c.506-.039 2.305-.297 3.914-.534a663 663 0 0 0 2.897-.435q.126-.019.194-.03.034-.003.052-.007l.012-.002h.004a1 1 0 0 0 0-1.977l-.003-.001-.013-.002-.052-.008-.194-.03-2.897-.434c-1.61-.237-3.408-.495-3.914-.534zm-8.5 1a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zM6.7 6.75a1 1 0 1 0-1.414 1.414l1.06 1.06A1 1 0 0 0 7.762 7.81zm12.014 0a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.06a1 1 0 0 0 0-1.415m-6.717-2.784A1 1 0 0 0 11 4.968l.005 1.505a1 1 0 0 0 2-.006L13 4.962a1 1 0 0 0-1.003-.997"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeLines85PercentIconFill.displayName = "GaugeLines85PercentIconFill";
export { GaugeLines85PercentIconFill };
