import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarPlusIconFilltone = memo(
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
          d="M14.6 2c1.103 0 1.991-.001 2.708.058.73.06 1.37.185 1.961.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961q.022.264.033.559h.013l.009.991.003.74V14.6c0 1.103 0 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.186 2.186c-.592.302-1.232.428-1.96.487-.718.059-1.606.058-2.71.058H9.4c-.827 0-1.533.001-2.137-.023q-.303-.013-.57-.035a7 7 0 0 1-1.033-.152 4 4 0 0 1-.93-.335 5 5 0 0 1-2.184-2.185c-.302-.593-.428-1.233-.488-1.961C2 16.59 2 15.703 2 14.599V9.4l-.001-.419q0-.4.004-.74l.008-.991h.014q.011-.295.032-.559c.06-.728.186-1.368.488-1.96A5 5 0 0 1 4.73 2.544c.592-.302 1.233-.428 1.961-.487C7.408 1.999 8.297 2 9.401 2z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 11a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.368.722.477 1.523.519 2.476a1 1 0 0 1-1 1.044H3.026a1 1 0 0 1-.999-1.044c.042-.953.151-1.754.519-2.476A5 5 0 0 1 4.73 2.545c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2z"
        />
      </svg>
    ))
);
CalendarPlusIconFilltone.displayName = "CalendarPlusIconFilltone";
export { CalendarPlusIconFilltone };
