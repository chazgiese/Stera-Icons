import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIconFilltone = memo(
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
          d="M13.866 5.134c.788-.787 2.134-.229 2.134.885v11.963c0 1.114-1.346 1.672-2.134.884l-3.5-3.5A1.25 1.25 0 0 0 9.482 15H7.25C6.56 15 6 14.44 6 13.75v-3.5C6 9.56 6.56 9 7.25 9h2.232c.332 0 .65-.132.884-.366z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.16 4.427C14.575 3.01 17 4.014 17 6.017v11.966c0 2.004-2.423 3.008-3.84 1.59l-3.5-3.5A.25.25 0 0 0 9.481 16H7.25a2.25 2.25 0 0 1-2.238-2.02L5 13.75v-3.5A2.25 2.25 0 0 1 7.25 8h2.232a.25.25 0 0 0 .177-.073zM15 6.017a.25.25 0 0 0-.427-.176l-3.5 3.5a2.25 2.25 0 0 1-1.59.66H7.25a.25.25 0 0 0-.25.25v3.5l.005.05a.25.25 0 0 0 .245.2h2.232c.597 0 1.17.237 1.591.658l3.5 3.5a.25.25 0 0 0 .427-.176z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SpeakerIconFilltone.displayName = "SpeakerIconFilltone";
export { SpeakerIconFilltone };
