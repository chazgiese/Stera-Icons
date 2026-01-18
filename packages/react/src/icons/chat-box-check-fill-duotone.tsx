import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxCheckIconFillDuotone = memo(
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
          d="M17.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v3.8c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058h-.296l-5.36 3.573a1.25 1.25 0 0 1-1.93-.858L8 21.533v-2.535c-.92 0-1.68-.004-2.309-.056-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 13.59 1 12.703 1 11.599V7.8c0-.823-.001-1.5.044-2.051.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 1.999 5.976 2 6.8 2zm-.618 5.293a1 1 0 0 0-1.414 0l-4.686 4.684L8.925 9.9a1 1 0 0 0-1.6 1.2l1.696 2.262c.085.113.187.25.285.36.104.117.272.281.52.39.317.14.672.164 1.005.072.262-.073.451-.213.571-.314.113-.095.232-.215.332-.315l4.848-4.848a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.168 7.293a1 1 0 1 1 1.414 1.414l-4.847 4.848c-.1.1-.22.22-.332.315-.12.101-.31.24-.572.314a1.5 1.5 0 0 1-1.005-.072 1.5 1.5 0 0 1-.52-.39c-.098-.11-.2-.246-.284-.36L7.325 11.1a1 1 0 1 1 1.6-1.2l1.558 2.078z"
        />
      </svg>
    ))
);
ChatBoxCheckIconFillDuotone.displayName = "ChatBoxCheckIconFillDuotone";
export { ChatBoxCheckIconFillDuotone };
