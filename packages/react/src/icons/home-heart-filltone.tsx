import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconFilltone = memo(
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
          d="M9.237 2.882a4.5 4.5 0 0 1 5.526 0l5.5 4.279A4.5 4.5 0 0 1 22 10.712V17.5a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-6.788a4.5 4.5 0 0 1 1.737-3.551zm4.667 6.867c-.784 0-1.478.384-1.904.971a2.35 2.35 0 0 0-1.904-.97 2.337 2.337 0 0 0-2.346 2.326c0 .983.534 1.746.735 2.025.979 1.357 2.342 2.288 3.36 3.095a.25.25 0 0 0 .31 0c1.019-.807 2.381-1.738 3.36-3.095.2-.28.735-1.042.735-2.025a2.337 2.337 0 0 0-2.346-2.327"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.904 9.75a2.336 2.336 0 0 1 2.346 2.326c0 .983-.534 1.746-.735 2.026-.979 1.357-2.341 2.287-3.36 3.094a.25.25 0 0 1-.31 0c-1.019-.807-2.381-1.737-3.36-3.094-.2-.28-.735-1.043-.735-2.026a2.336 2.336 0 0 1 2.346-2.326c.784 0 1.478.383 1.904.97a2.35 2.35 0 0 1 1.904-.97"
        />
      </svg>
    ))
);
HomeHeartIconFilltone.displayName = "HomeHeartIconFilltone";
export { HomeHeartIconFilltone };
