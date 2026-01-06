import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbOnIconDuotone = memo(
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
          <path d="M2.583 8.476a.75.75 0 0 1 .918-.53l.965.259a.75.75 0 0 1-.387 1.449l-.966-.259a.75.75 0 0 1-.53-.919M20.5 7.946a.75.75 0 0 1 .387 1.45l-.965.258a.75.75 0 0 1-.39-1.45zM5.106 4.106a.75.75 0 0 1 1.06 0l.708.707a.75.75 0 1 1-1.06 1.06l-.708-.706a.75.75 0 0 1 0-1.06M17.835 4.106a.75.75 0 1 1 1.06 1.06l-.707.708a.75.75 0 0 1-1.06-1.06zM9.476 1.583c.4-.107.811.13.918.53l.259.966a.75.75 0 1 1-1.448.387l-.26-.965a.75.75 0 0 1 .531-.918M13.606 2.113a.75.75 0 1 1 1.448.388l-.258.965a.75.75 0 0 1-1.45-.387z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5.25a5.75 5.75 0 0 1 4.791 8.93c-.832 1.251-1.542 2.304-1.542 3.459V19a2.75 2.75 0 0 1-1.568 2.48 1.748 1.748 0 0 1-3.363 0A2.75 2.75 0 0 1 8.75 19v-1.362c0-1.155-.709-2.208-1.54-3.458A5.75 5.75 0 0 1 12 5.25m-1.751 12.5V19c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1.25zM12 6.75a4.25 4.25 0 0 0-3.542 6.6c.537.807 1.22 1.786 1.567 2.9h3.948c.347-1.115 1.032-2.093 1.569-2.9A4.25 4.25 0 0 0 12 6.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LightbulbOnIconDuotone.displayName = "LightbulbOnIconDuotone";
export { LightbulbOnIconDuotone };
