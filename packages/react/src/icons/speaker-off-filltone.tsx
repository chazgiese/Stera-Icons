import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIconFilltone = memo(
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
          <path d="M16.966 18.38c-.295 1.733-2.487 2.513-3.807 1.193l-3.5-3.5A.25.25 0 0 0 9.482 16H7.25A2.25 2.25 0 0 1 5 13.75v-3.5a2.25 2.25 0 0 1 1.665-2.171zM13.16 4.427C14.575 3.01 17 4.013 17 6.017v9.569L9.414 8h.068a.25.25 0 0 0 .177-.073z" />
        </g>
        <path
          fill="currentColor"
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
SpeakerOffIconFilltone.displayName = "SpeakerOffIconFilltone";
export { SpeakerOffIconFilltone };
