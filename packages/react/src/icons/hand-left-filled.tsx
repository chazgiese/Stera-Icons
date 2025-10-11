import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandLeftIconFilled = memo(
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
          d="M9.559 1c.907 0 1.686.782 1.686 1.8v8.05a.5.5 0 0 0 1 0v-6.9l.009-.188c.089-.925.827-1.611 1.678-1.612.907 0 1.685.782 1.685 1.8v9.2a.5.5 0 0 0 .937.245l1.802-3.212.002-.005a1.69 1.69 0 0 1 1.189-.867c.364-.063.75 0 1.1.212.756.46 1.063 1.462.703 2.307l-.081.167-.03.066-1.337 3.583-.025.097C19.223 19.88 15.814 23 11.745 23 7.215 23 3.5 19.129 3.5 14.3V6.25c0-1.018.779-1.8 1.687-1.8.85 0 1.587.687 1.676 1.612l.01.188v5.175a.5.5 0 0 0 1 0V2.8c0-1.018.778-1.8 1.686-1.8"
        />
      </svg>
    ))
);
HandLeftIconFilled.displayName = "HandLeftIconFilled";
export { HandLeftIconFilled };
