import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerHighBold = memo(
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
          d="M19.772 3.222a1 1 0 0 1 1.399.2A14.28 14.28 0 0 1 24 12c0 3.227-1.054 6.204-2.83 8.576a1 1 0 0 1-1.6-1.198A12.28 12.28 0 0 0 22 12c0-2.786-.91-5.345-2.43-7.378-.331-.442-.24-1.07.201-1.4"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.16 4.427C9.576 3.01 12 4.013 12 6.017v11.965c0 2.005-2.423 3.009-3.84 1.591l-3.5-3.5A.25.25 0 0 0 4.481 16H2.25a2.25 2.25 0 0 1-2.238-2.02L0 13.75v-3.5A2.25 2.25 0 0 1 2.25 8h2.232a.25.25 0 0 0 .177-.073zM10 6.017a.25.25 0 0 0-.427-.176l-3.5 3.5a2.25 2.25 0 0 1-1.59.659H2.25a.25.25 0 0 0-.25.25v3.5l.005.05a.25.25 0 0 0 .245.2h2.232a2.25 2.25 0 0 1 1.591.66l3.5 3.5a.25.25 0 0 0 .427-.178z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.004 5.35a1 1 0 0 1 1.401.19 10.2 10.2 0 0 1 2.095 6.21c0 2.491-.89 4.778-2.368 6.554a1 1 0 0 1-1.538-1.28A8.2 8.2 0 0 0 18.5 11.75c0-1.88-.628-3.611-1.686-4.998a1 1 0 0 1 .19-1.401"
        />
        <path
          fill="currentColor"
          d="M14.146 7.549a1 1 0 0 1 1.402.182A6.98 6.98 0 0 1 17 12a6.97 6.97 0 0 1-1.452 4.268 1 1 0 1 1-1.584-1.22A4.97 4.97 0 0 0 15 12a4.98 4.98 0 0 0-1.036-3.049 1 1 0 0 1 .181-1.402"
        />
      </svg>
    ))
);
SpeakerHighBold.displayName = "SpeakerHighBold";
export { SpeakerHighBold };
