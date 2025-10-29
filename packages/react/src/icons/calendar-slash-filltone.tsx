import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarSlashIconFilltone = memo(
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
          d="M8.995 11.495a4.25 4.25 0 1 1 6.01 6.01 4.25 4.25 0 0 1-6.01-6.01M9.6 13.16a2.75 2.75 0 0 0 3.739 3.74zm4.344-.604a2.75 2.75 0 0 0-3.284-.456l3.74 3.739a2.75 2.75 0 0 0-.456-3.283"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.368.722.477 1.523.519 2.476a1 1 0 0 1-1 1.044H3.026a1 1 0 0 1-.999-1.044c.042-.953.151-1.754.519-2.476A5 5 0 0 1 4.73 2.545c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M13.339 16.9a2.748 2.748 0 0 1-3.74-3.74zM10.66 12.1a2.75 2.75 0 0 1 3.74 3.739z" />
          <path
            fillRule="evenodd"
            d="M21.974 7.206C22 7.822 22 8.547 22 9.4v5.2c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V9.4c0-.64 0-1.208.01-1.712l.016-.482a1 1 0 0 0 1 1.044h17.949a1 1 0 0 0 .998-.942zm-6.97 4.29a4.25 4.25 0 1 0-6.009 6.008 4.25 4.25 0 0 0 6.01-6.009"
            clipRule="evenodd"
          />
          <path d="M2.545 4.73a4 4 0 0 0-.117.253l.006-.012z" />
        </g>
      </svg>
    ))
);
CalendarSlashIconFilltone.displayName = "CalendarSlashIconFilltone";
export { CalendarSlashIconFilltone };
