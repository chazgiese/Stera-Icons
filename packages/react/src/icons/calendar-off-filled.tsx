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
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-.747-.747a5 5 0 0 1-.776.495c-.593.302-1.233.428-1.962.487-.717.059-1.605.058-2.708.058H9.9c-1.103 0-1.992.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.06-.718-.058-1.606-.058-2.71V10.4l.002-.4v-.272c.003-.8.01-1.471.056-2.037.052-.647.158-1.224.392-1.76q.044-.103.095-.2a5 5 0 0 1 .492-.78L2.293 3.707a1 1 0 0 1 0-1.414M4.502 10l-.002.4v4.2c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C7.971 20 8.764 20 9.9 20h4.2c1.136 0 1.929 0 2.545-.05.605-.05.954-.143 1.217-.277a3 3 0 0 0 .25-.147L8.586 10z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16 1a1 1 0 0 1 1 1v1.075c.57.058 1.085.164 1.566.374q.104.045.204.096a5 5 0 0 1 2.18 2.175q.001.005.005.01.046.091.087.186c.239.54.347 1.122.4 1.775.052.629.056 1.388.057 2.309v4.6c0 1.103.002 1.991-.057 2.709q-.008.1-.02.2l-1.927-1.928q.004-.442.005-.981v-4.2l-.002-.4h-5.584L6.992 3.078q.098-.012.2-.02C7.907 2.999 8.796 3 9.9 3h4.2q.476.001.9.004V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarOffIconFilled.displayName = "CalendarOffIconFilled";
export { CalendarOffIconFilled };
