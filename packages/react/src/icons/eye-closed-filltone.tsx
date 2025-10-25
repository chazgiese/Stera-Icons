import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconFilltone = memo(
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
          <path d="M14.316 12.222a1.5 1.5 0 0 1 1.817 1.095l.962 3.883a1.5 1.5 0 0 1-2.912.72l-.962-3.882a1.5 1.5 0 0 1 1.095-1.816M7.54 13.152a1.5 1.5 0 0 1 2.882.832l-1.11 3.843a1.5 1.5 0 0 1-2.882-.832zM3.306 9.903A1.5 1.5 0 1 1 5.47 11.98l-2.768 2.888a1.5 1.5 0 0 1-2.166-2.076zM18.606 9.828a1.5 1.5 0 0 1 2.12.035l2.782 2.875a1.5 1.5 0 0 1-2.156 2.086L18.57 11.95a1.5 1.5 0 0 1 .035-2.12" />
        </g>
        <path
          fill="currentColor"
          d="M20.852 6.454a1.5 1.5 0 0 1 2.795 1.092C21.829 12.2 17.3 15.5 11.999 15.5S2.17 12.2.352 7.546a1.501 1.501 0 0 1 2.795-1.092 9.505 9.505 0 0 0 17.705 0"
        />
      </svg>
    ))
);
EyeClosedIconFilltone.displayName = "EyeClosedIconFilltone";
export { EyeClosedIconFilltone };
