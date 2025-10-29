import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarPlusIconFilltone = memo(
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
          <path
            fillRule="evenodd"
            d="M21.974 7.206C22 7.822 22 8.547 22 9.4v5.2c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V9.4c0-.64 0-1.208.01-1.712l.016-.482a1 1 0 0 0 1 1.044h17.949a1 1 0 0 0 .998-.942zM12 11a1 1 0 0 0-1 1v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
            clipRule="evenodd"
          />
          <path d="M2.545 4.73a4 4 0 0 0-.117.253l.006-.012z" />
        </g>
        <path
          fill="currentColor"
          d="M12 11a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.368.722.477 1.523.519 2.476a1 1 0 0 1-1 1.044H3.026a1 1 0 0 1-.999-1.044c.042-.953.151-1.754.519-2.476A5 5 0 0 1 4.73 2.545c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2z"
        />
      </svg>
    ))
);
CalendarPlusIconFilltone.displayName = "CalendarPlusIconFilltone";
export { CalendarPlusIconFilltone };
