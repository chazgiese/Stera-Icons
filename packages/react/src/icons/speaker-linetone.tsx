import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIconLinetone = memo(
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
          d="M10 8a1 1 0 1 1 0 2H7.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25H10a1 1 0 1 1 0 2H7.25A2.25 2.25 0 0 1 5 13.75v-3.5A2.25 2.25 0 0 1 7.25 8z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13.16 4.427C14.576 3.01 17 4.014 17 6.017v11.966c0 2.004-2.423 3.008-3.84 1.59l-3.867-3.866a1 1 0 0 1 1.414-1.414l3.866 3.866a.25.25 0 0 0 .427-.176V6.018a.25.25 0 0 0-.427-.177l-3.866 3.866a1 1 0 1 1-1.414-1.414z"
        />
      </svg>
    ))
);
SpeakerIconLinetone.displayName = "SpeakerIconLinetone";
export { SpeakerIconLinetone };
