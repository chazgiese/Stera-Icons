import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveSineIconFilltone = memo(
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
          d="M20.522 11.748a1.5 1.5 0 0 1 2.957.504c-.42 2.464-1.153 4.663-2.152 6.291C20.364 20.113 18.92 21.5 17 21.5s-3.364-1.387-4.327-2.957c-.998-1.628-1.731-3.827-2.152-6.291l2.957-.504c.38 2.227 1.017 4.027 1.752 5.227.772 1.257 1.427 1.525 1.77 1.525s.998-.268 1.77-1.525c.735-1.2 1.372-3 1.752-5.227"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7 2.5c1.92 0 3.364 1.387 4.327 2.957.999 1.628 1.731 3.827 2.152 6.291l-2.958.504c-.38-2.227-1.016-4.027-1.752-5.227C8 5.768 7.343 5.5 7 5.5s-.998.268-1.77 1.525c-.735 1.2-1.372 3-1.752 5.227a1.5 1.5 0 0 1-2.957-.504c.42-2.464 1.153-4.663 2.152-6.291C3.636 3.887 5.08 2.5 7 2.5"
        />
      </svg>
    ))
);
WaveSineIconFilltone.displayName = "WaveSineIconFilltone";
export { WaveSineIconFilltone };
