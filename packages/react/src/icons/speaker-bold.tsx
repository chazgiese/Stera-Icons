import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIconBold = memo(
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
          d="M13.16 4.426C14.575 3.01 17 4.013 17 6.017v11.965c0 2.004-2.423 3.008-3.84 1.59l-3.5-3.5A.25.25 0 0 0 9.481 16H7.25a2.25 2.25 0 0 1-2.238-2.02L5 13.75v-3.5A2.25 2.25 0 0 1 7.25 8h2.232a.25.25 0 0 0 .177-.074zM15 6.017a.25.25 0 0 0-.427-.177l-3.5 3.5a2.25 2.25 0 0 1-1.59.66H7.25a.25.25 0 0 0-.25.25v3.5l.005.05a.25.25 0 0 0 .245.2h2.232c.597 0 1.17.237 1.591.659l3.5 3.5a.25.25 0 0 0 .427-.177z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SpeakerIconBold.displayName = "SpeakerIconBold";
export { SpeakerIconBold };
