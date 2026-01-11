import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxQuestionIconFillDuotone = memo(
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
          d="M17.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v3.8c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058h-.296l-5.36 3.573a1.25 1.25 0 0 1-1.93-.858L8 21.533v-2.535c-.92 0-1.68-.004-2.309-.056-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 13.59 1 12.703 1 11.599V7.8c0-.823-.001-1.5.044-2.051.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 1.999 5.976 2 6.8 2zM12 12.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-7.25c-1.264 0-2.637.722-2.97 2.034a1 1 0 0 0 1.94.492c.037-.148.36-.526 1.03-.526.34 0 .617.111.79.249.17.136.21.267.21.35 0 .112-.1.377-.538.527-.628.215-1.462.83-1.462 1.874a1 1 0 0 0 1.996.08q.01-.01.027-.02a.4.4 0 0 1 .087-.042C14.1 10.178 15 9.308 15 8.1c0-1.633-1.563-2.6-3-2.6"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 5.5c1.437 0 3 .967 3 2.6 0 1.209-.9 2.079-1.89 2.418a.4.4 0 0 0-.087.042l-.027.02A1 1 0 0 1 11 10.5c0-1.044.835-1.66 1.462-1.874.438-.15.538-.415.538-.526 0-.084-.04-.215-.21-.351A1.27 1.27 0 0 0 12 7.5c-.67 0-.992.378-1.03.526a1 1 0 0 1-1.94-.492C9.365 6.222 10.737 5.5 12 5.5"
        />
      </svg>
    ))
);
ChatBoxQuestionIconFillDuotone.displayName = "ChatBoxQuestionIconFillDuotone";
export { ChatBoxQuestionIconFillDuotone };
