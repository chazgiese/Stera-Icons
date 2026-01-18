import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CandleIconFillDuotone = memo(
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
          d="M13.83 10.25c.534 0 .98 0 1.345.03.38.03.736.098 1.073.27.517.263.938.684 1.202 1.202.172.337.24.693.27 1.073.031.371.03.828.03 1.375v4.6c0 .547.001 1.004-.03 1.375-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.202 1.202c-.337.172-.694.24-1.073.27-.371.031-.828.03-1.375.03h-3.6c-.547 0-1.004.001-1.375-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073-.031-.371-.03-.828-.03-1.375v-4.6c0-.547-.001-1.004.03-1.375.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.364-.03.81-.03 1.345-.03.537.317 1.16.5 1.83.5s1.292-.183 1.83-.5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.509 1.434a.75.75 0 0 1 .982 0l.004.003.009.008.028.025.105.094a14.954 14.954 0 0 1 1.446 1.54A9.8 9.8 0 0 1 15.2 4.782c.31.61.55 1.305.55 2.017 0 2.135-1.634 3.95-3.75 3.95S8.25 8.935 8.25 6.8c0-.712.24-1.408.55-2.017a9.8 9.8 0 0 1 1.117-1.68 15 15 0 0 1 1.446-1.54l.105-.093.028-.025.009-.008z"
        />
      </svg>
    ))
);
CandleIconFillDuotone.displayName = "CandleIconFillDuotone";
export { CandleIconFillDuotone };
