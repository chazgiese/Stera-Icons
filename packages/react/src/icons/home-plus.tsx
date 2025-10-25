import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomePlusIcon = memo(
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
          d="M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75"
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
HomePlusIcon.displayName = "HomePlusIcon";
export { HomePlusIcon };
