import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIconLinetone = memo(
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
          <path d="M8.586 10H7.25a.25.25 0 0 0-.25.25v3.5l.005.05a.25.25 0 0 0 .245.2h2.232a2.25 2.25 0 0 1 1.591.66l3.5 3.5a.25.25 0 0 0 .427-.178v-1.568l1.966 1.966c-.295 1.733-2.487 2.513-3.807 1.193l-3.5-3.5A.25.25 0 0 0 9.482 16H7.25a2.25 2.25 0 0 1-2.238-2.02L5 13.75v-3.5a2.25 2.25 0 0 1 1.665-2.171zM13.16 4.427C14.575 3.01 17 4.013 17 6.017v5.733a1 1 0 0 1-2 0V6.017a.25.25 0 0 0-.427-.176l-2.247 2.247a1 1 0 0 1-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
SpeakerOffIconLinetone.displayName = "SpeakerOffIconLinetone";
export { SpeakerOffIconLinetone };
