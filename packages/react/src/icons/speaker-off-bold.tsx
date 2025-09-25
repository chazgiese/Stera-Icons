import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffBold = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-2.327-2.327c-.295 1.733-2.486 2.513-3.807 1.193l-3.5-3.5A.25.25 0 0 0 9.483 16H7.25A2.25 2.25 0 0 1 5 13.75v-3.5c0-1.04.706-1.913 1.665-2.17L3.293 4.706a1 1 0 0 1 0-1.414M7.25 10a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h2.233a2.25 2.25 0 0 1 1.59.66l3.5 3.5a.25.25 0 0 0 .427-.177v-1.569L8.586 10z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13.16 4.427C14.576 3.01 17 4.013 17 6.017v5.733a1 1 0 0 1-2 0V6.018a.25.25 0 0 0-.427-.177l-2.247 2.247a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
SpeakerOffBold.displayName = "SpeakerOffBold";
export { SpeakerOffBold };
