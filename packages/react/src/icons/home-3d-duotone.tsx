import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Home3dIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-.995-.898L6.5 16v-2a1 1 0 0 1 1-1zM20.03 10.09c.14.141.22.332.22.531v.129h-6.5V10a.75.75 0 0 0-.22-.53l-.22-.22h5.88z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.379 4.25a2.25 2.25 0 0 1 1.59.66l4.122 4.12c.422.422.659.994.659 1.591V17.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-6.879c0-.597.237-1.169.66-1.59l4.12-4.122a2.25 2.25 0 0 1 1.591-.659zM13.53 9.47c.147.146.22.338.22.53v8.25h5.75a.75.75 0 0 0 .75-.75v-6.879a.75.75 0 0 0-.22-.53L15.91 5.97a.75.75 0 0 0-.531-.22H9.81zm-9.56.62a.75.75 0 0 0-.22.531V17.5c0 .414.336.75.75.75h7.75v-7.94L8 6.06z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Home3dIconDuotone.displayName = "Home3dIconDuotone";
export { Home3dIconDuotone };
