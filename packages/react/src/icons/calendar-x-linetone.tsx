import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarXIconLinetone = memo(
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
          d="M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.321.63.439 1.338.491 2.037q.017.214.028.44C22 7.821 22 8.546 22 9.4v5.2c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V9.4c0-.853 0-1.578.026-2.194q.01-.225.027-.44c.052-.699.17-1.405.492-2.036A5 5 0 0 1 4.73 2.545c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2zM4.005 8.25C4.002 8.59 4 8.97 4 9.4v5.2c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C7.471 20 8.264 20 9.4 20h5.2c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.135-.264.228-.612.277-1.218C20 16.53 20 15.736 20 14.6V9.4c0-.43-.002-.81-.005-1.15z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13.793 10.793a1 1 0 1 1 1.414 1.414L13.414 14l1.793 1.793a1 1 0 0 1-1.414 1.414L12 15.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L10.586 14l-1.793-1.793a1 1 0 1 1 1.414-1.414L12 12.586z"
        />
      </svg>
    ))
);
CalendarXIconLinetone.displayName = "CalendarXIconLinetone";
export { CalendarXIconLinetone };
