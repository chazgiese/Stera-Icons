import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines66PercentIconFill = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11a10.97 10.97 0 0 1-3.222 7.778 1 1 0 0 1-.707.293H4.93c-.265 0-.52-.105-.707-.293A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11M7.754 17.709a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.061a1 1 0 0 0 0-1.414m9.906 0a1 1 0 0 0-1.414 1.414l1.06 1.06a1 1 0 0 0 1.415-1.413zm-.003-9.902a1 1 0 0 0-1.3-.098l-.003.002-.01.008-.042.031-.158.116-.574.422c-.476.351-1.118.826-1.782 1.32-1.306.97-2.76 2.059-3.145 2.39l-.057.052a2 2 0 1 0 2.88 2.771c.33-.385 1.42-1.84 2.39-3.145.494-.665.969-1.307 1.32-1.783l.422-.573.116-.158.031-.042.008-.01.002-.004a1 1 0 0 0-.098-1.3M3.5 12.465a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.749a1 1 0 1 0-1.414 1.414l1.06 1.06A1 1 0 0 0 7.762 7.81zm5.297-2.784A1 1 0 0 0 11 4.968l.005 1.505a1 1 0 0 0 2-.006L13 4.962a1 1 0 0 0-1.003-.997"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeLines66PercentIconFill.displayName = "GaugeLines66PercentIconFill";
export { GaugeLines66PercentIconFill };
