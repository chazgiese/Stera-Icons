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
          d="M13.904 9.25c1.565 0 2.846 1.26 2.846 2.827 0 1.154-.622 2.03-.83 2.318-1.03 1.43-2.474 2.417-3.454 3.194a.75.75 0 0 1-.932 0c-.98-.777-2.424-1.764-3.455-3.194-.207-.287-.829-1.164-.829-2.318 0-1.568 1.28-2.826 2.846-2.826.732 0 1.4.276 1.904.73a2.84 2.84 0 0 1 1.904-.73m0 1.5c-.545 0-1.012.32-1.223.777a.75.75 0 0 1-1.362 0 1.35 1.35 0 0 0-1.223-.776c-.75 0-1.346.6-1.346 1.326 0 .64.356 1.177.545 1.44.751 1.042 1.745 1.792 2.705 2.533.89-.687 1.808-1.381 2.536-2.31l.168-.223c.19-.262.546-.8.546-1.44 0-.726-.596-1.326-1.346-1.326"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.084 3.319a4.75 4.75 0 0 1 5.832 0l5 3.889a4.75 4.75 0 0 1 1.834 3.749V17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17v-6.044a4.75 4.75 0 0 1 1.834-3.75zm4.911 1.184a3.25 3.25 0 0 0-3.99 0l-5 3.888a3.25 3.25 0 0 0-1.255 2.566V17A3.25 3.25 0 0 0 7 20.25h10A3.25 3.25 0 0 0 20.25 17v-6.044c0-1.003-.463-1.95-1.255-2.566z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIcon.displayName = "HomeHeartIcon";
export { HomeHeartIcon };
