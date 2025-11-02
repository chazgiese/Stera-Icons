import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SnowflakeIcon = memo(
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
          d="M12 1.25a.75.75 0 0 1 .75.75v2.2l1.875-1.082a.75.75 0 0 1 .75 1.299L12.75 5.933V10.7l4.13-2.384v-3.03a.75.75 0 0 1 1.499 0V7.45l1.906-1.1a.75.75 0 1 1 .75 1.3l-1.905 1.1 1.874 1.082a.75.75 0 0 1-.75 1.299L17.63 9.616 13.5 12l4.13 2.385 2.625-1.516a.75.75 0 0 1 .749 1.3L19.13 15.25l1.905 1.1a.75.75 0 1 1-.75 1.3l-1.905-1.1-.001 2.164a.75.75 0 0 1-1.5 0v-3.03l-4.129-2.385v4.767l2.625 1.517a.75.75 0 0 1-.75 1.299l-1.875-1.083V22a.75.75 0 1 1-1.5 0v-2.201l-1.875 1.083a.75.75 0 0 1-.75-1.299l2.625-1.517V13.3l-4.129 2.384v3.03a.75.75 0 0 1-1.5 0V16.55l-1.906 1.1a.75.75 0 0 1-.75-1.298L4.87 15.25l-1.876-1.082a.75.75 0 0 1 .75-1.3l2.626 1.516 4.129-2.385-4.129-2.383-2.626 1.515a.75.75 0 0 1-.75-1.299L4.871 8.75l-1.906-1.1a.75.75 0 1 1 .75-1.3L5.62 7.452V5.286a.75.75 0 0 1 1.5 0v3.031L11.25 10.7V5.933L8.625 4.417a.75.75 0 0 1 .75-1.299L11.25 4.2V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
SnowflakeIcon.displayName = "SnowflakeIcon";
export { SnowflakeIcon };
