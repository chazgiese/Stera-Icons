import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIconBoldDuotone = memo(
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
          <path d="M9.293 8.293A1 1 0 0 0 10 10H7.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25H10q.088 0 .172.016a.998.998 0 0 0-.879 1.691l.293.293H7.25A2.25 2.25 0 0 1 5 13.75v-3.5A2.25 2.25 0 0 1 7.25 8h2.336zM10.597 9.8" />
        </g>
        <path
          fill="currentColor"
          d="M13.16 4.426C14.576 3.01 17 4.013 17 6.017v11.965c0 2.004-2.423 3.008-3.84 1.59l-3.867-3.865a1 1 0 0 1 1.414-1.414l3.866 3.866a.25.25 0 0 0 .427-.177V6.017a.25.25 0 0 0-.427-.177l-3.866 3.867a1 1 0 1 1-1.414-1.414z"
        />
      </svg>
    ))
);
SpeakerIconBoldDuotone.displayName = "SpeakerIconBoldDuotone";
export { SpeakerIconBoldDuotone };
