import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketFilled = memo(
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
          d="M11.4 1.2a1 1 0 0 1 1.2 0c3.634 2.726 5.374 5.81 5.875 8.861l2.486 2.486c.7.7 1.01 1.702.827 2.675l-1.113 5.938c-.232 1.237-1.794 1.654-2.613.699L16.3 19.805q-.157.265-.32.517A3 3 0 0 1 13.002 23h-2.002a3 3 0 0 1-2.982-2.678q-.162-.252-.32-.516L5.938 21.86c-.82.956-2.381.538-2.614-.7l-1.113-5.937a3 3 0 0 1 .827-2.675l2.485-2.485c.5-3.052 2.242-6.136 5.876-8.861M4.453 13.962a1 1 0 0 0-.275.892l.92 4.912L6.7 17.898c-.664-1.484-1.15-3.143-1.29-4.894zm14.136-.958c-.139 1.751-.627 3.409-1.291 4.893l1.604 1.87.92-4.913a1 1 0 0 0-.275-.892zM12 8a2 2 0 1 0 0 4.001 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RocketFilled.displayName = "RocketFilled";
export { RocketFilled };
