import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpinnerIcon = memo(
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
          d="M12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M6.517 16.42a.75.75 0 1 1 1.06 1.061l-2.12 2.121a.75.75 0 1 1-1.061-1.06zM16.416 16.42a.75.75 0 0 1 1.06 0l2.122 2.122a.75.75 0 0 1-1.06 1.06l-2.122-2.12a.75.75 0 0 1 0-1.061M5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM4.395 4.4a.75.75 0 0 1 1.061 0l2.121 2.121a.75.75 0 0 1-1.06 1.061L4.395 5.461a.75.75 0 0 1 0-1.06M18.537 4.4a.75.75 0 1 1 1.06 1.06l-2.12 2.122a.75.75 0 0 1-1.061-1.06zM12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
SpinnerIcon.displayName = "SpinnerIcon";
export { SpinnerIcon };
