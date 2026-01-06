import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbOnIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M2.34 8.412a1 1 0 0 1 1.225-.707l.966.259a1 1 0 1 1-.517 1.931l-.966-.258a1 1 0 0 1-.707-1.225M20.434 7.705a1 1 0 1 1 .518 1.932l-.966.258a1 1 0 0 1-.517-1.931zM4.93 3.929a1 1 0 0 1 1.414 0l.707.708A1 1 0 0 1 5.637 6.05l-.707-.707a1 1 0 0 1 0-1.415M17.658 3.929a1 1 0 0 1 1.414 1.415l-.707.707a1 1 0 0 1-1.414-1.414zM9.411 1.34a1 1 0 0 1 1.225.708l.258.966a1 1 0 1 1-1.931.517l-.259-.966a1 1 0 0 1 .707-1.224M13.364 2.048a1 1 0 0 1 1.932.517l-.259.966a1 1 0 1 1-1.932-.517z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5a6 6 0 0 1 4.999 9.32c-.845 1.27-1.5 2.255-1.5 3.319V19a3 3 0 0 1-1.612 2.657 1.998 1.998 0 0 1-3.774.001A3 3 0 0 1 8.5 19v-1.362c0-1.064-.654-2.049-1.499-3.32A6 6 0 0 1 12 5m-1.501 14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h-3zM12 7a4 4 0 0 0-3.334 6.21c.5.753 1.165 1.7 1.541 2.79h3.584c.377-1.09 1.043-2.036 1.543-2.788A4 4 0 0 0 12 7"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LightbulbOnIconBoldDuotone.displayName = "LightbulbOnIconBoldDuotone";
export { LightbulbOnIconBoldDuotone };
