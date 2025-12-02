import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyboardIcon = memo(
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
          d="M6.5 13.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM14.25 13.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5zM17.999 13.25a.75.75 0 0 1 0 1.5H17.5a.75.75 0 0 1 0-1.5zM6.5 9.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM10.25 9.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5zM14.25 9.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5zM18.001 9.25a.75.75 0 0 1 0 1.5H17.5a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 5.25A2.75 2.75 0 0 1 22.75 8v8A2.75 2.75 0 0 1 20 18.75H4A2.75 2.75 0 0 1 1.25 16V8A2.75 2.75 0 0 1 4 5.25zM4 6.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyboardIcon.displayName = "KeyboardIcon";
export { KeyboardIcon };
