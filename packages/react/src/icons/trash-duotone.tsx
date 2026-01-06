import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrashIconDuotone = memo(
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
          d="M20.124 16.046c-.065 1.044-.117 1.871-.212 2.536-.096.674-.244 1.242-.536 1.757a4.75 4.75 0 0 1-2.057 1.933c-.532.258-1.108.371-1.787.425-.67.053-1.498.053-2.545.053h-1.974c-1.047 0-1.876 0-2.545-.053-.679-.054-1.255-.167-1.787-.425a4.75 4.75 0 0 1-2.057-1.933c-.291-.515-.44-1.083-.536-1.757-.095-.665-.147-1.492-.212-2.536L3.295 6.75h1.504l.574 9.202c.067 1.068.115 1.826.2 2.418.082.583.195.944.357 1.23a3.25 3.25 0 0 0 1.407 1.323c.296.144.663.233 1.25.28.596.047 1.355.047 2.426.047h1.974c1.07 0 1.83 0 2.426-.048.587-.047.954-.135 1.25-.28a3.25 3.25 0 0 0 1.407-1.321c.162-.287.274-.648.358-1.23.084-.593.132-1.35.199-2.419l.574-9.202h1.504z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.266 10.251a.75.75 0 0 1 .796.702l.375 6a.75.75 0 0 1-1.499.094l-.375-6a.75.75 0 0 1 .703-.796M14.734 10.251a.75.75 0 0 1 .703.796l-.375 6a.75.75 0 0 1-1.498-.094l.374-6a.75.75 0 0 1 .796-.702"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.439 1.25a2.75 2.75 0 0 1 2.667 2.083l.48 1.917H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h5.414l.48-1.917a2.75 2.75 0 0 1 2.668-2.083zm-2.877 1.5a1.25 1.25 0 0 0-1.213.947L8.96 5.25h6.08l-.389-1.553a1.25 1.25 0 0 0-1.213-.947z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrashIconDuotone.displayName = "TrashIconDuotone";
export { TrashIconDuotone };
