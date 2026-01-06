import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerHighIconFillDuotone = memo(
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
          <path d="M19.772 3.223a1 1 0 0 1 1.399.2 14.28 14.28 0 0 1 2.83 8.578c0 3.227-1.055 6.204-2.83 8.576a1 1 0 0 1-1.602-1.198A12.28 12.28 0 0 0 22 12c0-2.786-.91-5.345-2.43-7.378a1 1 0 0 1 .202-1.4" />
          <path d="M17.004 5.352a1 1 0 0 1 1.401.189 10.2 10.2 0 0 1 2.095 6.21c0 2.491-.89 4.778-2.368 6.554a1 1 0 0 1-1.538-1.28A8.2 8.2 0 0 0 18.5 11.75c0-1.88-.628-3.611-1.685-4.998a1 1 0 0 1 .189-1.401" />
          <path d="M14.146 7.55a1 1 0 0 1 1.402.182A6.97 6.97 0 0 1 17 12.001a6.97 6.97 0 0 1-1.452 4.269 1 1 0 0 1-1.584-1.221A4.97 4.97 0 0 0 15 12a4.98 4.98 0 0 0-1.036-3.049 1 1 0 0 1 .182-1.402" />
        </g>
        <path
          fill="currentColor"
          d="M9.633 3.843C10.608 3.145 12 3.836 12 5.067v13.866c0 1.271-1.483 1.966-2.46 1.152l-4.833-4.027a.25.25 0 0 0-.16-.058H2.25A2.25 2.25 0 0 1 0 13.75v-3.5A2.25 2.25 0 0 1 2.25 8h2.298a.25.25 0 0 0 .159-.058L9.54 3.915z"
        />
      </svg>
    ))
);
SpeakerHighIconFillDuotone.displayName = "SpeakerHighIconFillDuotone";
export { SpeakerHighIconFillDuotone };
