import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarBlankIconBold = memo(
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
          d="M16 1a1 1 0 0 1 1 1v1.075c.65.066 1.23.195 1.77.47a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 5.23 3.544c.54-.275 1.12-.404 1.77-.47V2a1 1 0 0 1 2 0v1.004Q9.425 3 9.9 3h4.2q.475.001.9.004V2a1 1 0 0 1 1-1M4.5 11v3.6c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C7.971 20 8.764 20 9.9 20h4.2c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V11zM9 5.004V6a1 1 0 1 1-2 0v-.911c-.396.053-.655.133-.862.238a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217-.027.325-.038.699-.044 1.146h14.986c-.006-.447-.017-.82-.044-1.146-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.31-1.31c-.208-.106-.467-.186-.863-.24V6a1 1 0 1 1-2 0v-.996Q14.59 5 14.1 5H9.9q-.49.001-.9.004"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalendarBlankIconBold.displayName = "CalendarBlankIconBold";
export { CalendarBlankIconBold };
