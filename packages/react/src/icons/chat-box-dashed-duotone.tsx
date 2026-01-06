import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxDashedIconDuotone = memo(
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
          <path d="M2 11.75a.75.75 0 0 1 .75.75V14A3.25 3.25 0 0 0 6 17.25a.75.75 0 0 1 0 1.5A4.75 4.75 0 0 1 1.25 14v-1.5a.75.75 0 0 1 .75-.75M22 11.75a.75.75 0 0 1 .75.75V14A4.75 4.75 0 0 1 18 18.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 0 21.25 14v-1.5a.75.75 0 0 1 .75-.75M6 2.25a.75.75 0 0 1 0 1.5A3.25 3.25 0 0 0 2.75 7v1.5a.75.75 0 0 1-1.5 0V7A4.75 4.75 0 0 1 6 2.25M18 2.25A4.75 4.75 0 0 1 22.75 7v1.5a.75.75 0 0 1-1.5 0V7A3.25 3.25 0 0 0 18 3.75a.75.75 0 0 1 0-1.5M14.25 2.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M14.584 17.376a.75.75 0 0 1 .832 1.248l-5.223 3.481a1.25 1.25 0 0 1-1.943-1.04V18a.75.75 0 0 1 1.5 0v2.598z"
        />
      </svg>
    ))
);
ChatBoxDashedIconDuotone.displayName = "ChatBoxDashedIconDuotone";
export { ChatBoxDashedIconDuotone };
