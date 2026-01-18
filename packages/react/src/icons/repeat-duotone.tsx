import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RepeatIconDuotone = memo(
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
          d="M18.47 2.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H7A4.25 4.25 0 0 0 2.75 11v1.5a.75.75 0 0 1-1.5 0V11A5.75 5.75 0 0 1 7 5.25h13.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          d="M22 10.75a.75.75 0 0 1 .75.75V13A5.75 5.75 0 0 1 17 18.75H3.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H17A4.25 4.25 0 0 0 21.25 13v-1.5a.75.75 0 0 1 .75-.75"
          opacity={0.4}
        />
      </svg>
    ))
);
RepeatIconDuotone.displayName = "RepeatIconDuotone";
export { RepeatIconDuotone };
