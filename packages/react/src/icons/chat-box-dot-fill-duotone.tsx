import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxDotIconFillDuotone = memo(
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
          d="M14.392 2A5.5 5.5 0 0 0 23 8.772V11.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058h-.296l-5.36 3.573a1.25 1.25 0 0 1-1.93-.858L8 21.533v-2.535c-.92 0-1.68-.004-2.309-.056-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 13.59 1 12.703 1 11.599V7.8c0-.823-.001-1.5.044-2.051.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 1.999 5.976 2 6.8 2z"
          opacity={0.4}
        />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      </svg>
    ))
);
ChatBoxDotIconFillDuotone.displayName = "ChatBoxDotIconFillDuotone";
export { ChatBoxDotIconFillDuotone };
