import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Home3dIcon = memo(
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
          d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-.995-.898L6.5 16v-2a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.379 4.25a2.25 2.25 0 0 1 1.59.66l4.122 4.12c.422.422.659.994.659 1.591V17.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-6.879c0-.597.237-1.169.66-1.59l4.12-4.122a2.25 2.25 0 0 1 1.591-.659zm-11.41 5.84a.75.75 0 0 0-.219.531V17.5c0 .414.336.75.75.75h7.75v-7.94L8 6.06zm9.781 8.16h5.75a.75.75 0 0 0 .75-.75V11a.25.25 0 0 0-.25-.25h-6.25zm-.44-9h5.88l-3.28-3.28a.75.75 0 0 0-.531-.22H9.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Home3dIcon.displayName = "Home3dIcon";
export { Home3dIcon };
