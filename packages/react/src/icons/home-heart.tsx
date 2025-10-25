import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIcon = memo(
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
          d="M13.904 9.25c1.565 0 2.846 1.26 2.846 2.826 0 1.155-.622 2.031-.83 2.319-1.03 1.43-2.474 2.416-3.454 3.193a.75.75 0 0 1-.932 0c-.98-.777-2.424-1.763-3.455-3.193-.207-.287-.829-1.164-.829-2.319 0-1.567 1.28-2.826 2.846-2.826.732 0 1.4.277 1.904.73a2.84 2.84 0 0 1 1.904-.73m0 1.5c-.545 0-1.012.32-1.223.777a.75.75 0 0 1-1.362 0 1.35 1.35 0 0 0-1.223-.777c-.75 0-1.346.6-1.346 1.326 0 .64.356 1.178.545 1.44.751 1.043 1.745 1.793 2.705 2.534.89-.687 1.808-1.381 2.536-2.31l.168-.223c.19-.263.546-.8.546-1.44 0-.727-.596-1.327-1.346-1.327"
          clipRule="evenodd"
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
HomeHeartIcon.displayName = "HomeHeartIcon";
export { HomeHeartIcon };
