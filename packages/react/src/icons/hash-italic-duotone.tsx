import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashItalicIconDuotone = memo(
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
          <path d="M7.732 21.163a.75.75 0 0 1-1.465-.326l1.131-5.087h1.537zM13.732 21.163a.751.751 0 0 1-1.465-.326l1.131-5.087h1.537zM9.268 14.25H7.731l1-4.5h1.537zM15.268 14.25h-1.537l1-4.5h1.537zM10.267 2.836a.752.752 0 0 1 1.465.327l-1.13 5.087H9.063zM16.267 2.836a.752.752 0 0 1 1.465.327l-1.13 5.087h-1.538z" />
        </g>
        <path
          fill="currentColor"
          d="M19 14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 8.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
HashItalicIconDuotone.displayName = "HashItalicIconDuotone";
export { HashItalicIconDuotone };
