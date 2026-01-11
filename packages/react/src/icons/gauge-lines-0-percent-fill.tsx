import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines0PercentIconFill = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11a10.97 10.97 0 0 1-3.222 7.778 1 1 0 0 1-.707.293H4.93c-.265 0-.52-.105-.707-.293A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11m5.66 15.245a1 1 0 0 0-1.414 1.414l1.06 1.06a1 1 0 0 0 1.415-1.413zm-4.246-5.66a2 2 0 0 0-2.88.057c-.331.386-1.42 1.84-2.39 3.146-.494.664-.969 1.306-1.32 1.782l-.422.573-.116.158-.031.043-.008.01-.002.003a1 1 0 0 0 .098 1.3 1 1 0 0 0 1.3.098l.003-.002.01-.008.042-.031.158-.117.574-.421 1.782-1.32c1.306-.97 2.76-2.06 3.145-2.39l.057-.052a2 2 0 0 0 0-2.828m-9.914.416a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.749a1 1 0 1 0-1.414 1.414l1.06 1.06A1 1 0 0 0 7.762 7.81zm12.014 0a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.06a1 1 0 0 0 0-1.415m-6.717-2.784A1 1 0 0 0 11 4.968l.005 1.505a1 1 0 0 0 2-.006L13 4.962a1 1 0 0 0-1.003-.997"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeLines0PercentIconFill.displayName = "GaugeLines0PercentIconFill";
export { GaugeLines0PercentIconFill };
