import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxOffIconFillDuotone = memo(
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
          d="M1.293 1.293a1 1 0 0 1 1.414 0l19 19a1 1 0 0 1-1.414 1.414l-19-19a1 1 0 0 1 0-1.414"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M17.566 18.98C17.001 19 16.35 19 15.6 19h-.297l-5.36 3.573a1.25 1.25 0 0 1-1.93-.858L8 21.533v-2.535c-.92 0-1.68-.004-2.309-.056-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 13.59 1 12.703 1 11.599V7.8c0-.823-.001-1.5.044-2.051.046-.562.144-1.08.392-1.564a4 4 0 0 1 .536-.798zM17.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v3.8c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186 4 4 0 0 1-.276.125L3.656 2.242c.346-.11.709-.167 1.092-.198C5.298 1.999 5.976 2 6.8 2z" />
        </g>
      </svg>
    ))
);
ChatBoxOffIconFillDuotone.displayName = "ChatBoxOffIconFillDuotone";
export { ChatBoxOffIconFillDuotone };
