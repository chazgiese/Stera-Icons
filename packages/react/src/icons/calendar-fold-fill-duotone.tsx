import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarFoldIconFillDuotone = memo(
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
          d="M21.5 10.4v4.1h-3.8c-.552 0-.996 0-1.354.03-.365.03-.685.092-.98.243a2.5 2.5 0 0 0-1.093 1.092c-.151.296-.214.616-.244.98-.029.36-.029.803-.029 1.355V22H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.002-.4h18.996z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.5 15.005c-.003.29-.014.519-.07.75a2.5 2.5 0 0 1-.298.722c-.162.265-.387.485-.716.814l-3.625 3.625c-.33.33-.55.554-.814.716a2.5 2.5 0 0 1-.722.299c-.231.055-.46.066-.75.069l-.505.005V18.2c0-.552 0-.996.03-1.354.03-.365.092-.685.243-.98a2.5 2.5 0 0 1 1.092-1.093c.296-.151.616-.214.98-.244.36-.029.803-.029 1.355-.029h3.805zM16 1a1 1 0 0 1 1 1v1.088c.726.073 1.282.209 1.77.457a5 5 0 0 1 2.185 2.185c.476.934.536 2.12.544 4.27H2.501c.008-2.15.068-3.336.544-4.27a5 5 0 0 1 2.184-2.185C5.717 3.297 6.274 3.16 7 3.088V2a1 1 0 0 1 2 0v1.007C9.451 3.003 9.948 3 10.5 3h3c.552 0 1.049.003 1.5.007V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarFoldIconFillDuotone.displayName = "CalendarFoldIconFillDuotone";
export { CalendarFoldIconFillDuotone };
