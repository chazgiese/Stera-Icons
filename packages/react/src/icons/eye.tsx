import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Eye = memo(
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
          d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.25c4.81 0 8.909 3.097 10.694 7.467a.75.75 0 0 1 0 .566C20.91 16.653 16.811 19.75 12 19.75s-8.91-3.097-10.694-7.467a.75.75 0 0 1 0-.566C3.09 7.347 7.189 4.25 12 4.25m0 1.5c-4.033 0-7.547 2.534-9.185 6.25 1.638 3.716 5.152 6.25 9.185 6.25s7.546-2.534 9.183-6.25C19.547 8.284 16.033 5.75 12 5.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Eye.displayName = "Eye";
export { Eye };
