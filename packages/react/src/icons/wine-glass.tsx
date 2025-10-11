import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineGlassIcon = memo(
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
          d="M17.523 1.251q.069.002.132.016.03.007.059.017.04.01.078.025l.006.003.022.011q.12.057.211.149a.7.7 0 0 1 .121.166q.023.037.041.077.03.07.044.147v.002l.001.002.001.007.005.026.017.096.058.362A38.42 38.42 0 0 1 18.75 8a6.75 6.75 0 0 1-5.999 6.707V19A2.25 2.25 0 0 0 15 21.25h1q.04 0 .077.004A.75.75 0 0 1 16 22.75H8a.75.75 0 0 1 0-1.5h1A2.25 2.25 0 0 0 11.25 19v-4.293A6.75 6.75 0 0 1 5.25 8a38.4 38.4 0 0 1 .43-5.643 23 23 0 0 1 .076-.458l.005-.026v-.007l.002-.002v-.002q.015-.077.043-.147c.01-.027.027-.052.04-.077a.8.8 0 0 1 .12-.164l.004-.004a.8.8 0 0 1 .209-.147l.024-.012q.04-.016.082-.027.03-.01.059-.017a1 1 0 0 1 .132-.016l.01-.001h11.028zM7.14 2.75A36.928 36.928 0 0 0 6.75 8a5.25 5.25 0 1 0 10.5 0 37 37 0 0 0-.39-5.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WineGlassIcon.displayName = "WineGlassIcon";
export { WineGlassIcon };
