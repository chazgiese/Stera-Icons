import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines50PercentIconFill = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11a10.97 10.97 0 0 1-3.222 7.778 1 1 0 0 1-.707.293H4.93c-.265 0-.52-.105-.707-.293A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11M7.754 17.708a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.06a1 1 0 0 0 0-1.415m9.906 0a1 1 0 0 0-1.414 1.414l1.06 1.06a1 1 0 0 0 1.415-1.413zM12 5.464a1 1 0 0 0-.988.85l-.001.003-.002.013-.008.052-.03.194a844 844 0 0 0-.434 2.897c-.237 1.61-.495 3.408-.534 3.914l-.003.077a2 2 0 1 0 3.997-.077c-.039-.506-.297-2.305-.534-3.914a670 670 0 0 0-.435-2.897L13 6.382l-.008-.052-.002-.013v-.004a1 1 0 0 0-.989-.85m-8.5 7a1 1 0 0 0 0 2H5a1 1 0 1 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 1 0 0-2zM6.7 6.748a1 1 0 0 0-1.414 1.414l1.06 1.06A1 1 0 1 0 7.762 7.81zm12.014 0a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.06a1 1 0 0 0 0-1.415"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeLines50PercentIconFill.displayName = "GaugeLines50PercentIconFill";
export { GaugeLines50PercentIconFill };
