import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForwardIconDuotone = memo(
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
          d="M12.25 9.5a.75.75 0 0 0 .673.746l.077.004c-3.738 0-5.97.512-7.305 1.74-.994.914-1.595 2.33-1.83 4.57q.18-.183.383-.368C5.618 14.96 7.792 13.75 11 13.75h2a.75.75 0 0 0-.75.75v.75H11c-2.792 0-4.618 1.04-5.748 2.058a7.5 7.5 0 0 0-1.222 1.405 6 6 0 0 0-.344.59v.003l-.002.002A.75.75 0 0 1 2.25 19c0-3.786.62-6.45 2.43-8.114 1.67-1.537 4.188-2.065 7.57-2.13z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.713 3.306a.75.75 0 0 1 .817.163l8 8a.75.75 0 0 1 0 1.061l-8 8a.75.75 0 0 1-1.28-.53v-5.5a.75.75 0 0 1 1.5 0v3.69L19.94 12l-6.19-6.19V9.5a.75.75 0 1 1-1.5 0V4c0-.303.183-.578.463-.694"
        />
      </svg>
    ))
);
ForwardIconDuotone.displayName = "ForwardIconDuotone";
export { ForwardIconDuotone };
