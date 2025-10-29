import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeSimpleIconLinetone = memo(
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
          d="M9.237 2.882a4.5 4.5 0 0 1 5.526 0l5.5 4.279A4.5 4.5 0 0 1 22 10.713V17.5a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-6.789a4.5 4.5 0 0 1 1.737-3.551zm4.298 1.58a2.5 2.5 0 0 0-3.07 0l-5.5 4.277A2.5 2.5 0 0 0 4 10.712v6.789A2.5 2.5 0 0 0 6.5 20h1.483A1 1 0 0 0 8 22h8a1 1 0 0 0 .017-2H17.5a2.5 2.5 0 0 0 2.5-2.5v-6.787c0-.772-.356-1.5-.965-1.974z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M16 20a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
HomeSimpleIconLinetone.displayName = "HomeSimpleIconLinetone";
export { HomeSimpleIconLinetone };
