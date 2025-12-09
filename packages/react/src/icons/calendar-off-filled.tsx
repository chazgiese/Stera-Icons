import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarOffIconFilled = memo(
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
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-.747-.747c-.242.187-.5.355-.776.495-.593.302-1.233.428-1.961.487-.717.059-1.606.058-2.71.058H9.902c-1.104 0-1.992.001-2.71-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.002-.4.001-.272c.002-.8.009-1.471.055-2.037.053-.647.158-1.224.392-1.76q.045-.103.095-.2a5 5 0 0 1 .492-.78L2.293 3.707a1 1 0 0 1 0-1.414M4.503 10q-.002.193-.003.4v4.2c0 1.136 0 1.929.051 2.545.05.606.142.954.276 1.217a3 3 0 0 0 1.31 1.31c.264.135.613.228 1.218.277C7.97 20 8.765 20 9.9 20H14.1c1.136 0 1.929 0 2.546-.05.605-.05.953-.143 1.217-.277q.128-.068.25-.147L8.586 10z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16 1a1 1 0 0 1 1 1v1.075c.57.058 1.085.164 1.567.374q.103.045.203.096a5 5 0 0 1 2.18 2.175l.005.01q.046.091.087.186c.24.54.347 1.122.4 1.775.052.629.057 1.388.057 2.309l.001.4v4.2c0 1.103.001 1.991-.058 2.709q-.008.1-.019.2l-1.928-1.928q.004-.442.005-.981v-4.2l-.002-.4h-5.584L6.992 3.078q.098-.012.2-.02C7.909 2.999 8.797 3 9.9 3H14.1q.475.001.9.004V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarOffIconFilled.displayName = "CalendarOffIconFilled";
export { CalendarOffIconFilled };
