import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeXIcon = memo(
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
          d="M13.97 10.47a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 0 1-1.06 1.06L12 14.56l-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06L12 12.44z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.39 3.08a4.25 4.25 0 0 1 5.22 0l5.5 4.278a4.25 4.25 0 0 1 1.64 3.354V17.5a4.25 4.25 0 0 1-4.25 4.25h-11a4.25 4.25 0 0 1-4.25-4.25v-6.788a4.25 4.25 0 0 1 1.64-3.354zm4.298 1.184a2.75 2.75 0 0 0-3.376 0l-5.5 4.277a2.75 2.75 0 0 0-1.062 2.171V17.5a2.75 2.75 0 0 0 2.75 2.75h11a2.75 2.75 0 0 0 2.75-2.75v-6.788a2.75 2.75 0 0 0-1.061-2.17z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeXIcon.displayName = "HomeXIcon";
export { HomeXIcon };
