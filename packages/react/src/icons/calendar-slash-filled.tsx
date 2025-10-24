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
          d="M12.912 16.576a2.499 2.499 0 0 1-3.24-3.24zM11.087 11.923a2.5 2.5 0 0 1 3.239 3.24z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.6 2c1.103 0 1.991-.001 2.708.058.73.06 1.37.185 1.961.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961q.022.264.033.559h.013l.009.991.003.74V14.6c0 1.103 0 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.186 2.186c-.592.302-1.232.428-1.96.487-.718.059-1.606.058-2.71.058H9.4c-.827 0-1.534.001-2.137-.023q-.303-.013-.57-.035a7 7 0 0 1-1.033-.153 4 4 0 0 1-.93-.334 5 5 0 0 1-2.184-2.185c-.302-.593-.428-1.233-.488-1.961C2 16.59 2 15.703 2 14.599V9.4l-.001-.419q0-.4.004-.74l.008-.991h.014q.011-.295.032-.559c.06-.728.186-1.368.488-1.96A5 5 0 0 1 4.73 2.544c.592-.302 1.233-.428 1.961-.487C7.408 1.999 8.297 2 9.401 2zm.582 9.068a4.5 4.5 0 1 0-6.364 6.363 4.5 4.5 0 0 0 6.364-6.363M9.4 4c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.311 1.31c-.134.264-.227.612-.276 1.217q-.014.187-.024.396h15.946q-.01-.21-.024-.396c-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.613-.228-1.218-.277C16.53 4 15.735 4 14.6 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalendarSlashIconFilled.displayName = "CalendarSlashIconFilled";
export { CalendarSlashIconFilled };
