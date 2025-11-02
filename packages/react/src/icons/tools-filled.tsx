import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconFilled = memo(
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
          d="M5.977 13.233a6.2 6.2 0 0 0 1.58.105l3.104 3.105c-.032.528.002 1.06.105 1.58l-2.984 2.985a3.388 3.388 0 0 1-4.79-4.79z"
        />
        <path
          fill="currentColor"
          d="M5.966 2.659A4.675 4.675 0 0 1 11.76 8.1l4.14 4.14a4.676 4.676 0 0 1 5.442 5.795.502.502 0 0 1-.837.225l-1.304-1.304h-2.246v2.246l1.304 1.303a.5.5 0 0 1-.225.837A4.676 4.676 0 0 1 12.24 15.9L8.1 11.76a4.676 4.676 0 0 1-5.441-5.794l.022-.063a.5.5 0 0 1 .815-.161L4.8 7.045h2.246V4.8L5.741 3.496a.5.5 0 0 1 .225-.837"
        />
        <path
          fill="currentColor"
          d="M19.794 2.069a1 1 0 0 1 1.07.224l.843.844c.324.325.386.829.15 1.222l-1.265 2.11a1.002 1.002 0 0 1-1.564.193l-.138-.137-3.293 3.29-1.414-1.413 3.292-3.292-.136-.137a1 1 0 0 1 .192-1.564l2.11-1.266z"
        />
      </svg>
    ))
);
ToolsIconFilled.displayName = "ToolsIconFilled";
export { ToolsIconFilled };
