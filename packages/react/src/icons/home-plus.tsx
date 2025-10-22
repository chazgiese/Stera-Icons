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
          d="M9.084 3.318a4.75 4.75 0 0 1 5.832 0l5 3.889a4.75 4.75 0 0 1 1.834 3.75V17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17v-6.044a4.75 4.75 0 0 1 1.834-3.749zm4.911 1.184a3.25 3.25 0 0 0-3.99 0l-5 3.889a3.25 3.25 0 0 0-1.255 2.565V17A3.25 3.25 0 0 0 7 20.25h10A3.25 3.25 0 0 0 20.25 17v-6.044a3.25 3.25 0 0 0-1.255-2.565zM12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          d="M9.084 3.32a4.75 4.75 0 0 1 5.832 0l5 3.888a4.75 4.75 0 0 1 1.834 3.749v6.044a4.75 4.75 0 0 1-4.75 4.75H7a4.75 4.75 0 0 1-4.75-4.75v-6.044a4.75 4.75 0 0 1 1.834-3.749zm4.911 1.183a3.25 3.25 0 0 0-3.99 0l-5 3.889a3.25 3.25 0 0 0-1.255 2.565v6.044A3.25 3.25 0 0 0 7 20.251h10a3.25 3.25 0 0 0 3.25-3.25v-6.044c0-1.003-.463-1.95-1.255-2.565zM12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
HomePlusIcon.displayName = "HomePlusIcon";
export { HomePlusIcon };
