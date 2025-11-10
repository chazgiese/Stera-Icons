import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarSlashIconFilled = memo(
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
          d="M12.912 16.576a2.499 2.499 0 0 1-3.24-3.24zM11.087 11.923a2.5 2.5 0 0 1 3.24 3.24z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.6 2c1.103 0 1.992-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.488 1.961q.021.264.033.559h.012l.01.991.002.74V14.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.717.059-1.606.058-2.71.058H9.4c-.827 0-1.533.001-2.137-.023q-.301-.013-.57-.035a7 7 0 0 1-1.033-.153 4 4 0 0 1-.93-.334 5 5 0 0 1-2.184-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V8.982q-.002-.4.003-.74l.008-.991h.014q.012-.295.033-.559c.06-.728.185-1.368.487-1.96a5 5 0 0 1 2.186-2.186c.592-.302 1.232-.428 1.96-.487C7.41 1.999 8.298 2 9.401 2zm.582 9.068a4.5 4.5 0 1 0-6.364 6.363 4.5 4.5 0 0 0 6.364-6.363M9.4 4c-1.136 0-1.929 0-2.545.05-.605.05-.954.143-1.217.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217q-.014.187-.024.396h15.946q-.01-.21-.024-.396c-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.217-.277C16.529 4 15.736 4 14.6 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalendarSlashIconFilled.displayName = "CalendarSlashIconFilled";
export { CalendarSlashIconFilled };
