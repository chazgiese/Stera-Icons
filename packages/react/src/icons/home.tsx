import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeIcon = memo(
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
          d="M13 11.75c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2a1.25 1.25 0 0 1-1.243-1.122L9.75 17v-4c0-.69.56-1.25 1.25-1.25z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.084 3.319a4.75 4.75 0 0 1 5.832 0l5 3.888a4.75 4.75 0 0 1 1.834 3.75V17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17v-6.043a4.75 4.75 0 0 1 1.834-3.75zm4.911 1.183a3.25 3.25 0 0 0-3.99 0l-5 3.89a3.25 3.25 0 0 0-1.255 2.565V17A3.25 3.25 0 0 0 7 20.25h10A3.25 3.25 0 0 0 20.25 17v-6.043c0-1.003-.463-1.95-1.255-2.566z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeIcon.displayName = "HomeIcon";
export { HomeIcon };
