import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveSineIconBold = memo(
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
          d="M7 3c1.657 0 2.97 1.2 3.902 2.718.954 1.556 1.67 3.69 2.084 6.114l.075.42c.393 2.077 1.012 3.793 1.743 4.984C15.607 18.546 16.394 19 17 19s1.393-.454 2.197-1.764c.78-1.27 1.431-3.138 1.818-5.404a1 1 0 1 1 1.97.336c-.413 2.425-1.129 4.558-2.083 6.114C19.97 19.8 18.657 21 17 21s-2.97-1.2-3.901-2.718c-.895-1.459-1.58-3.425-2.003-5.663l-.081-.451c-.387-2.266-1.039-4.133-1.818-5.404C8.393 5.454 7.607 5 7 5c-.606 0-1.393.454-2.196 1.764-.78 1.27-1.432 3.138-1.818 5.404a1 1 0 1 1-1.971-.336c.413-2.425 1.13-4.558 2.084-6.114C4.03 4.2 5.343 3 7 3"
        />
      </svg>
    ))
);
WaveSineIconBold.displayName = "WaveSineIconBold";
export { WaveSineIconBold };
