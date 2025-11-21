import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarOffIconBold = memo(
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
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-.745-.745a5 5 0 0 1-.778.493c-.593.302-1.233.428-1.962.487-.717.059-1.605.058-2.708.058H9.9c-1.103 0-1.992.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.06-.718-.058-1.606-.058-2.71V10l.002-.043c0-.901.005-1.647.056-2.266.06-.728.185-1.368.487-1.96q.21-.415.492-.78L2.293 3.707a1 1 0 0 1 0-1.414M4.5 11v3.6c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C7.971 20 8.764 20 9.9 20h4.2c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277q.13-.067.251-.146L9.586 11zm.472-4.614a3 3 0 0 0-.145.252c-.134.263-.227.611-.276 1.216-.027.325-.038.699-.044 1.146h3.079z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16 1a1 1 0 0 1 1 1v1.075c.65.066 1.23.195 1.77.47a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.961.05.619.054 1.365.055 2.266L21.5 10l-.002.034.002.366v4.2c0 .628 0 1.182-.01 1.667a1 1 0 0 1-2-.041c.01-.46.01-.992.01-1.626V11h-5.258a1 1 0 1 1 0-2h5.251c-.006-.447-.017-.82-.044-1.146-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.31-1.31c-.208-.106-.468-.186-.863-.24V6a1 1 0 0 1-2 0v-.996Q14.59 5 14.1 5H9.9c-.638 0-1.172 0-1.634.01a1 1 0 1 1-.042-2C8.71 3 9.268 3 9.9 3h4.2q.476.001.9.004V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarOffIconBold.displayName = "CalendarOffIconBold";
export { CalendarOffIconBold };
