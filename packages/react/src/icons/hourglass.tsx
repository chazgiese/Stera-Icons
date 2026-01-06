import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassIcon = memo(
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
          d="M14.679 6.327a.752.752 0 0 1 .351 1.327l-1.284 1.028c-.256.204-.48.432-.674.674-.185.233-.304.51-.369.801a8.5 8.5 0 0 0-.203 1.837q0 1.553.3 3.108c.105.538.386 1.023.773 1.41l1.957 1.958a.751.751 0 0 1-.53 1.28H9a.751.751 0 0 1-.53-1.28l1.957-1.957c.387-.388.667-.874.771-1.411q.302-1.555.302-3.108 0-.918-.204-1.836a2 2 0 0 0-.37-.803 4.3 4.3 0 0 0-.672-.673L8.97 7.654a.751.751 0 0 1 .468-1.336h5.124z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 1.25A2.75 2.75 0 0 1 19.75 4v1.116a6.75 6.75 0 0 1-2.533 5.27l-1.284 1.028a.75.75 0 0 0 0 1.172l1.284 1.027a6.75 6.75 0 0 1 2.533 5.27V20A2.75 2.75 0 0 1 17 22.75H7A2.75 2.75 0 0 1 4.25 20v-1.116c0-2.05.932-3.99 2.533-5.27l1.284-1.028a.75.75 0 0 0 0-1.172l-1.284-1.027a6.75 6.75 0 0 1-2.533-5.27V4A2.75 2.75 0 0 1 7 1.25zM7 2.75c-.69 0-1.25.56-1.25 1.25v1.116a5.25 5.25 0 0 0 1.97 4.1l1.284 1.027a2.25 2.25 0 0 1 0 3.514L7.72 14.784a5.25 5.25 0 0 0-1.971 4.1V20c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-1.116a5.25 5.25 0 0 0-1.97-4.1l-1.284-1.027a2.25 2.25 0 0 1 0-3.514l1.283-1.027a5.25 5.25 0 0 0 1.971-4.1V4c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HourglassIcon.displayName = "HourglassIcon";
export { HourglassIcon };
