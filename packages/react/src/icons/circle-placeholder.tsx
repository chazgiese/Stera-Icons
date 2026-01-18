import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CirclePlaceholderIcon = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75q0 .774-.106 1.52a10.7 10.7 0 0 1-1.675 4.409 10.8 10.8 0 0 1-3.04 3.04A10.7 10.7 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12q0-.774.106-1.52c.229-1.613.815-3.11 1.675-4.409a10.8 10.8 0 0 1 3.04-3.04A10.7 10.7 0 0 1 12 1.25M2.757 12.303a9.246 9.246 0 0 0 8.94 8.94zM3.81 7.699a9.2 9.2 0 0 0-.907 2.63l10.768 10.767a9.2 9.2 0 0 0 2.629-.907zm2.594-3.062a9.3 9.3 0 0 0-1.767 1.767l12.958 12.958a9.3 9.3 0 0 0 1.767-1.767zm3.924-1.734c-.933.17-1.816.48-2.629.908L20.19 16.3a9.2 9.2 0 0 0 .907-2.63zm10.914 8.793a9.246 9.246 0 0 0-8.94-8.94z"
        />
      </svg>
    ))
);
CirclePlaceholderIcon.displayName = "CirclePlaceholderIcon";
export { CirclePlaceholderIcon };
