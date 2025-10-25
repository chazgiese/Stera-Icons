import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarIconFilltone = memo(
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
          d="M14.6 2c1.103 0 1.992-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.488 1.961q.021.264.033.559h.012l.01.991.002.74V14.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.4c-.827 0-1.533.001-2.137-.023q-.301-.013-.57-.035a7 7 0 0 1-1.033-.152 4 4 0 0 1-.93-.335 5 5 0 0 1-2.184-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V8.982q-.002-.4.003-.74l.008-.991h.014q.012-.295.033-.559c.06-.728.185-1.368.487-1.96a5 5 0 0 1 2.186-2.186c.592-.302 1.232-.428 1.96-.487C7.41 1.999 8.298 2 9.401 2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.75 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.368.722.477 1.523.519 2.476a1 1 0 0 1-1 1.044H3.026a1 1 0 0 1-.999-1.044c.042-.953.151-1.754.519-2.476A5 5 0 0 1 4.73 2.545c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2z"
        />
      </svg>
    ))
);
CalendarIconFilltone.displayName = "CalendarIconFilltone";
export { CalendarIconFilltone };
