import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarMinusIconFill = memo(
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
        <path fill="currentColor" d="M15 14a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 1a1 1 0 0 1 1 1v1.075c.57.058 1.085.164 1.566.374q.104.045.204.096a5 5 0 0 1 2.272 2.371c.239.54.347 1.122.4 1.775.047.566.052 1.237.054 2.037q.002.134.003.272l.001.4v4.2c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.002-.4v-.272c.003-.8.01-1.471.056-2.037.053-.647.158-1.224.392-1.76q.045-.103.095-.2a5 5 0 0 1 2.388-2.282c.482-.21.997-.316 1.567-.374V2a1 1 0 0 1 2 0v1.004Q9.425 3 9.9 3h4.2q.475.001.9.004V2a1 1 0 0 1 1-1M4.5 10.4v4.2c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C7.971 20 8.764 20 9.9 20h4.2c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545v-4.2l-.002-.4H4.502z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalendarMinusIconFill.displayName = "CalendarMinusIconFill";
export { CalendarMinusIconFill };
