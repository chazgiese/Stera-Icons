import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlameIconBold = memo(
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
          d="M11.37 1.223a1 1 0 0 1 1.26 0L12 2l.63-.777.004.003.005.004q.006.006.02.017l.072.06q.095.077.265.225a37.465 37.465 0 0 1 3.76 3.751c1.029 1.188 2.077 2.577 2.873 4.045.791 1.459 1.37 3.065 1.371 4.672a9 9 0 0 1-18 0c0-1.607.58-3.213 1.371-4.672.796-1.468 1.844-2.857 2.872-4.045a37.5 37.5 0 0 1 4.026-3.977q.046-.038.073-.06l.02-.016.004-.004zl.541.666zM12 13.886c-.282.292-.623.668-.96 1.103-.845 1.085-1.54 2.36-1.54 3.51 0 .95.365 1.541.82 1.914.487.398 1.13.587 1.68.587s1.193-.19 1.68-.587c.455-.373.82-.963.82-1.913 0-1.152-.695-2.426-1.54-3.511-.337-.435-.678-.812-.96-1.103m-.57-10.051A36 36 0 0 0 8.757 6.59c-.972 1.124-1.924 2.392-2.628 3.69C5.42 11.588 5 12.856 5 14a6.99 6.99 0 0 0 2.583 5.43 5 5 0 0 1-.083-.93c0-1.849 1.055-3.575 1.96-4.74a16 16 0 0 1 1.838-1.974l.035-.031.01-.01.004-.003.002-.001a1 1 0 0 1 1.301 0h.003l.003.004.011.01.035.03.125.113a15.812 15.812 0 0 1 1.712 1.862c.906 1.165 1.96 2.891 1.961 4.74q-.002.49-.084.93A6.99 6.99 0 0 0 19 14c0-1.144-.42-2.412-1.129-3.72-.704-1.297-1.656-2.565-2.628-3.689A35.5 35.5 0 0 0 12 3.318q-.249.22-.57.517"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlameIconBold.displayName = "FlameIconBold";
export { FlameIconBold };
