import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCentIcon = memo(
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
          d="M12 1.25a.75.75 0 0 1 .75.75v2.755A7.25 7.25 0 0 1 17.5 6.75a.751.751 0 0 1-1.035 1.086 5.75 5.75 0 0 0-3.714-1.58v11.487a5.752 5.752 0 0 0 4.154-2.047.75.75 0 0 1 1.15.964 7.238 7.238 0 0 1-5.304 2.584V22a.75.75 0 0 1-1.5 0v-2.86a7.246 7.246 0 0 1-5.989-6.736 7.25 7.25 0 0 1 5.989-7.546V2a.75.75 0 0 1 .75-.75m-.75 5.138a5.748 5.748 0 0 0-3.318 9.104 5.75 5.75 0 0 0 3.319 2.12z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurrencyCentIcon.displayName = "CurrencyCentIcon";
export { CurrencyCentIcon };
