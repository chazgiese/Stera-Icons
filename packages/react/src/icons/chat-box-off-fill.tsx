import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxOffIconFill = memo(
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
          d="M15.465 19h-.162l-5.36 3.573a1.25 1.25 0 0 1-1.93-.858L8 21.533v-2.535c-.92 0-1.68-.004-2.309-.056-.728-.059-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C.999 13.592 1 12.703 1 11.599V7.8c0-.822-.001-1.5.044-2.05.029-.35.077-.683.169-1zM1.293 1.293a1 1 0 0 1 1.414 0l19 19a1 1 0 0 1-1.414 1.414l-19-19a1 1 0 0 1 0-1.414M17.2 2c.824 0 1.502 0 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.229.044 2.052v3.8c0 1.103.001 1.992-.058 2.709-.06.728-.185 1.369-.487 1.96a5 5 0 0 1-1.161 1.49L5.543 2.008C5.918 2 6.336 2 6.8 2z"
        />
      </svg>
    ))
);
ChatBoxOffIconFill.displayName = "ChatBoxOffIconFill";
export { ChatBoxOffIconFill };
