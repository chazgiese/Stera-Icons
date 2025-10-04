import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketBold = memo(
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
        <path fill="currentColor" d="M12 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.4 1.2a1 1 0 0 1 1.2 0c3.634 2.726 5.374 5.81 5.875 8.86l2.486 2.487c.7.7 1.01 1.702.827 2.675l-1.113 5.937c-.232 1.238-1.794 1.655-2.613.7L16.3 19.805q-.157.264-.32.517A3 3 0 0 1 13.002 23h-2.002a3 3 0 0 1-2.982-2.678q-.162-.252-.32-.516L5.94 21.859c-.82.956-2.381.538-2.614-.7l-1.113-5.937a3 3 0 0 1 .827-2.675l2.485-2.485C6.024 7.01 7.765 3.926 11.4 1.2m.6 2.07C8.673 5.978 7.48 8.9 7.373 11.602c-.114 2.91 1.031 5.703 2.458 7.844.11.164.167.357.167.554 0 .552.449 1 1 1H13a1 1 0 0 0 1-1 1 1 0 0 1 .168-.554c1.427-2.14 2.571-4.935 2.457-7.844C16.52 8.9 15.325 5.978 12 3.27M4.452 13.96a1 1 0 0 0-.275.892l.92 4.912L6.7 17.898c-.664-1.485-1.15-3.143-1.29-4.894zm14.136-.958c-.139 1.75-.627 3.409-1.291 4.893l1.604 1.869.92-4.912a1 1 0 0 0-.275-.892z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RocketBold.displayName = "RocketBold";
export { RocketBold };
