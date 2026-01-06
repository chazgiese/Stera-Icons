import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulersIconDuotone = memo(
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
          d="M19.75 2.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-10v10a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-10h1.5v10l.01.1a.5.5 0 0 0 .49.4h3.5a.5.5 0 0 0 .5-.5v-10h1.5v-1.5h10a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-10v-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8.25 17.75H7a.75.75 0 0 1 0-1.5h1.25zM8.25 13.75H7a.75.75 0 0 1 0-1.5h1.25z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.75 9.75h-7.5V4c0-.966.784-1.75 1.75-1.75h5.75zM4 3.75a.25.25 0 0 0-.25.25v4.25h4.5v-4.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13 6.25a.75.75 0 0 1 .75.75v1.25h-1.5V7a.75.75 0 0 1 .75-.75M17 6.25a.75.75 0 0 1 .75.75v1.25h-1.5V7a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
RulersIconDuotone.displayName = "RulersIconDuotone";
export { RulersIconDuotone };
