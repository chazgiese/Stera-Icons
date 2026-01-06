import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarSlashIconFillDuotone = memo(
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
          <path d="M12.968 17.778a2.248 2.248 0 0 1-2.997-2.997zM11.031 13.72a2.249 2.249 0 0 1 2.997 2.998z" />
          <path
            fillRule="evenodd"
            d="M21.5 10.4v4.2c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.002-.4h18.996zM14.651 13.1A3.75 3.75 0 1 0 9.35 18.4a3.75 3.75 0 0 0 5.302-5.302"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M16 1a1 1 0 0 1 1 1v1.088c.726.073 1.282.209 1.77.457a5 5 0 0 1 2.185 2.185c.476.934.536 2.12.544 4.27H2.501c.008-2.15.068-3.336.544-4.27a5 5 0 0 1 2.184-2.185C5.717 3.297 6.274 3.16 7 3.088V2a1 1 0 0 1 2 0v1.007C9.451 3.003 9.948 3 10.5 3h3c.552 0 1.049.003 1.5.007V2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.349 13.099a3.75 3.75 0 1 1 5.303 5.302 3.75 3.75 0 0 1-5.303-5.302m.622 1.682a2.248 2.248 0 0 0 2.997 2.997zm3.62-.622a2.25 2.25 0 0 0-2.56-.438l2.998 2.997a2.25 2.25 0 0 0-.438-2.559"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalendarSlashIconFillDuotone.displayName = "CalendarSlashIconFillDuotone";
export { CalendarSlashIconFillDuotone };
