import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerLowIconFilled = memo(
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
          d="M12.086 4c1.26-1.26 3.414-.368 3.414 1.414v13.172c0 1.781-2.154 2.674-3.414 1.414l-3.927-3.927A.25.25 0 0 0 7.982 16H5.75a2.25 2.25 0 0 1-2.25-2.25v-3.5A2.25 2.25 0 0 1 5.75 8h2.232a.25.25 0 0 0 .177-.073zM17.646 7.548a1 1 0 0 1 1.402.181 6.98 6.98 0 0 1 1.452 4.269 6.97 6.97 0 0 1-1.452 4.269 1 1 0 1 1-1.584-1.22 4.98 4.98 0 0 0 1.036-3.05 4.97 4.97 0 0 0-1.036-3.047 1 1 0 0 1 .181-1.402"
        />
      </svg>
    ))
);
SpeakerLowIconFilled.displayName = "SpeakerLowIconFilled";
export { SpeakerLowIconFilled };
