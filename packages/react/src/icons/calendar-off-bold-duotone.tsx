import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarOffIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.972 6.386q-.078.121-.145.252c-.134.263-.227.611-.276 1.217-.027.324-.038.698-.044 1.145h3.079l2 2H4.5v3.6c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C7.971 20 8.764 20 9.9 20h4.2c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277q.13-.067.251-.146l1.435 1.435a5 5 0 0 1-.778.493c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.001-.366L2.5 10l.002-.043c0-.901.005-1.647.056-2.266.06-.728.185-1.368.487-1.96q.21-.415.492-.78zM17 3.075c.65.066 1.23.195 1.77.47a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.961.05.619.054 1.365.055 2.266L21.5 10l-.002.034.002.366v4.2c0 .628 0 1.182-.01 1.667a1 1 0 0 1-2-.041c.01-.46.01-.992.01-1.626V11h-5.258a1 1 0 1 1 0-2h5.251c-.006-.447-.017-.82-.044-1.146-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.31-1.31c-.208-.106-.467-.186-.863-.24zM15 3.004v2Q14.59 5 14.1 5H9.9c-.638 0-1.172 0-1.634.01a1 1 0 1 1-.042-2C8.71 3 9.268 3 9.9 3h4.2q.475.001.9.004" />
        </g>
        <path
          fill="currentColor"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414M16 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarOffIconBoldDuotone.displayName = "CalendarOffIconBoldDuotone";
export { CalendarOffIconBoldDuotone };
