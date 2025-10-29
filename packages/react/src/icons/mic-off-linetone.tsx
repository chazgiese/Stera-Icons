import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicOffIconLinetone = memo(
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
          <path d="M4 10a1 1 0 0 1 1 1 7 7 0 0 0 10.593 6.007l1.448 1.448A8.96 8.96 0 0 1 13 19.942V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.058c-4.5-.497-8-4.31-8-8.942a1 1 0 0 1 1-1" />
          <path d="M9 10.414V11a3 3 0 0 0 3.536 2.95l1.578 1.578c-.643.3-1.359.472-2.114.472a5 5 0 0 1-5-5V8.414zM20 10a1 1 0 0 1 1 1c0 1.543-.39 2.999-1.076 4.27a1 1 0 0 1-1.76-.95A6.97 6.97 0 0 0 19 11a1 1 0 0 1 1-1M12 1a5 5 0 0 1 5 5v5.055a1 1 0 1 1-2 0V6a3 3 0 0 0-5.48-1.69 1 1 0 0 1-1.65-1.128A5 5 0 0 1 12 1" />
        </g>
        <path
          fill="currentColor"
          d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
MicOffIconLinetone.displayName = "MicOffIconLinetone";
export { MicOffIconLinetone };
