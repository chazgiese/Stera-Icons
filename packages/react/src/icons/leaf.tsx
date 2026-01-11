import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LeafIcon = memo(
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
          d="M20.75 3c0 4.037-.376 6.856-1.193 9.092-.824 2.255-2.076 3.86-3.713 5.497a7.377 7.377 0 0 1-9.828.54c-.195.254-.425.573-.661.93-.476.72-.924 1.521-1.143 2.178a.751.751 0 0 1-1.423-.474c.28-.843.814-1.774 1.314-2.53.288-.437.585-.84.839-1.16a7.38 7.38 0 0 1 .47-9.917c1.31-1.311 2.662-2.57 4.87-3.477C12.473 2.779 15.45 2.25 20 2.25h.75zm-1.504.755c-4.01.056-6.566.561-8.394 1.311-1.924.79-3.103 1.874-4.38 3.15a5.876 5.876 0 0 0-.496 7.746l3.578-3.577a.75.75 0 0 1 1.06 1.06l-3.577 3.578a5.876 5.876 0 0 0 7.747-.495c1.549-1.549 2.641-2.974 3.364-4.95C18.83 9.71 19.2 7.3 19.246 3.754"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LeafIcon.displayName = "LeafIcon";
export { LeafIcon };
