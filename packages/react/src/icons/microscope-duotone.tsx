import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicroscopeIconDuotone = memo(
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
          <path d="M12.25 7.75h-.75a6.75 6.75 0 0 0 0 13.5H6.76a8.25 8.25 0 0 1 4.74-15h.75zM19 17.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M20 21.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 1.25A3.75 3.75 0 0 1 19.75 5v5.75a2 2 0 0 1-2 2h-.02q.019.123.02.25a1.75 1.75 0 1 1-3.48-.25h-.02a2 2 0 0 1-2-2V5A3.75 3.75 0 0 1 16 1.25m0 1.5A2.25 2.25 0 0 0 13.75 5v5.75a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V5A2.25 2.25 0 0 0 16 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MicroscopeIconDuotone.displayName = "MicroscopeIconDuotone";
export { MicroscopeIconDuotone };
