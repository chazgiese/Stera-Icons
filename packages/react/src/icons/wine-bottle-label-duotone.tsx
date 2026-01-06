import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineBottleLabelIconDuotone = memo(
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
          d="M12.704 1.26A2 2 0 0 1 14.5 3.25V7.5c0 .053.02.128.107.228.092.103.237.205.409.278A3.25 3.25 0 0 1 17 11v9a2.75 2.75 0 0 1-2.75 2.75h-4.5A2.75 2.75 0 0 1 7 20v-9c0-1.347.82-2.501 1.984-2.994.172-.073.317-.175.409-.278.088-.1.107-.175.107-.228V3.25a2 2 0 0 1 2-2h1zM11.5 2.75a.5.5 0 0 0-.5.5V7.5c0 1.003-.815 1.627-1.432 1.888A1.75 1.75 0 0 0 8.5 11v9c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-9a1.75 1.75 0 0 0-1.068-1.612C13.815 9.127 13 8.502 13 7.5V3.25a.5.5 0 0 0-.4-.49l-.1-.01z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.5 19.25h-7v-1.5h7zM15.5 13.75h-7v-1.5h7z"
        />
      </svg>
    ))
);
WineBottleLabelIconDuotone.displayName = "WineBottleLabelIconDuotone";
export { WineBottleLabelIconDuotone };
