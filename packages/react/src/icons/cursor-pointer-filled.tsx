import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorPointerIconFilled = memo(
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
          d="M9.784 1c1.045 0 1.894.832 1.894 1.857V10.5c0 .236.196.428.437.429a.43.43 0 0 0 .436-.429V8.571c0-1.025.85-1.857 1.895-1.857s1.893.832 1.893 1.857v2.358c0 .236.196.428.437.428a.434.434 0 0 0 .437-.428V9.714c0-1.025.848-1.856 1.894-1.857S21 8.688 21 9.714v4.572C21 19.1 17.022 23 12.115 23c-4.406 0-8.064-3.146-8.764-7.273a.4.4 0 0 0-.025-.086l-1.424-3.562-.029-.056-.087-.17a1.84 1.84 0 0 1 .78-2.369 1.92 1.92 0 0 1 2.588.681l.002.004 1.922 3.191c.1.167.302.246.492.196a.43.43 0 0 0 .32-.413V2.857c0-1.025.848-1.856 1.894-1.857"
        />
        <path
          fill="currentColor"
          d="M9.783 1c1.046 0 1.895.832 1.895 1.857V10.5c0 .236.195.428.436.429a.433.433 0 0 0 .437-.429V8.571c0-1.025.849-1.857 1.894-1.857 1.046 0 1.894.832 1.894 1.857v2.358c0 .236.195.428.436.428a.434.434 0 0 0 .438-.428V9.714c0-1.025.848-1.856 1.893-1.857 1.046 0 1.894.831 1.894 1.857v4.572C21 19.1 17.02 23 12.114 23c-4.406 0-8.063-3.146-8.764-7.273a.4.4 0 0 0-.025-.086l-1.424-3.562-.028-.056-.087-.17a1.84 1.84 0 0 1 .78-2.369 1.92 1.92 0 0 1 2.587.681l.002.004 1.922 3.191c.1.167.302.246.492.196a.43.43 0 0 0 .32-.413V2.857c0-1.025.849-1.856 1.894-1.857"
        />
      </svg>
    ))
);
CursorPointerIconFilled.displayName = "CursorPointerIconFilled";
export { CursorPointerIconFilled };
