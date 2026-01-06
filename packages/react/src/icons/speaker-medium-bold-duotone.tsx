import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerMediumIconBoldDuotone = memo(
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
          <path d="M18.754 5.35a1 1 0 0 1 1.401.188 10.2 10.2 0 0 1 2.095 6.21c0 2.491-.89 4.778-2.368 6.554a1.001 1.001 0 0 1-1.538-1.28 8.2 8.2 0 0 0 1.906-5.274 8.2 8.2 0 0 0-1.686-4.997 1 1 0 0 1 .19-1.401" />
          <path d="M15.896 7.548a1 1 0 0 1 1.402.182 6.98 6.98 0 0 1 1.452 4.268 6.98 6.98 0 0 1-1.452 4.269 1 1 0 1 1-1.584-1.22 4.98 4.98 0 0 0 1.036-3.049 4.97 4.97 0 0 0-1.036-3.048 1 1 0 0 1 .182-1.402" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.91 4.426c1.416-1.416 3.84-.413 3.84 1.591v11.965c0 2.004-2.423 3.008-3.84 1.59l-3.5-3.5A.25.25 0 0 0 6.231 16H4a2.25 2.25 0 0 1-2.238-2.02l-.012-.23v-3.5A2.25 2.25 0 0 1 4 8h2.232a.25.25 0 0 0 .177-.074zm1.84 1.591a.25.25 0 0 0-.427-.177l-3.5 3.5a2.25 2.25 0 0 1-1.59.66H4a.25.25 0 0 0-.25.25v3.5l.005.05A.25.25 0 0 0 4 14h2.232c.597 0 1.17.237 1.591.659l3.5 3.5a.25.25 0 0 0 .427-.177z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SpeakerMediumIconBoldDuotone.displayName = "SpeakerMediumIconBoldDuotone";
export { SpeakerMediumIconBoldDuotone };
