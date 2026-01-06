import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextBIconDuotone = memo(
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
          d="M6 2.25h.75v19.5H6a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 6 2.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.5 2.25a5.25 5.25 0 0 1 3.45 9.204A5.251 5.251 0 0 1 14.5 21.75H6.75v-1.5h7.75a3.75 3.75 0 1 0 0-7.5H6.75v-1.5h5.75a3.75 3.75 0 1 0 0-7.5H6.75v-1.5z"
        />
      </svg>
    ))
);
TextBIconDuotone.displayName = "TextBIconDuotone";
export { TextBIconDuotone };
