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
          d="M13.97 10.47a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 0 1-1.06 1.06L12 14.562l-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06L12 12.44z"
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
HomeXIcon.displayName = "HomeXIcon";
export { HomeXIcon };
