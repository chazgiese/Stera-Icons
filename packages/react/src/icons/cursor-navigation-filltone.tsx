import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorNavigationIconFilltone = memo(
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
          d="M9.988 2.79c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.984 1.97-1.156 4.035-3.09 2.981L12 18.14 4.977 21.97C3.044 23.024.904 20.96 1.888 18.99zm2.236.894a.25.25 0 0 0-.447 0l-8.1 16.198a.23.23 0 0 0-.028.157.27.27 0 0 0 .078.135.27.27 0 0 0 .138.073.23.23 0 0 0 .156-.033l7.5-4.092c.298-.162.66-.162.958 0l7.501 4.092a.23.23 0 0 0 .156.033.27.27 0 0 0 .138-.073.27.27 0 0 0 .078-.135.24.24 0 0 0-.028-.157z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M11.776 3.684a.25.25 0 0 1 .447 0l8.1 16.199a.24.24 0 0 1 .029.157.27.27 0 0 1-.079.135.27.27 0 0 1-.137.073.24.24 0 0 1-.157-.033l-7.5-4.092a1 1 0 0 0-.959 0l-7.5 4.092a.24.24 0 0 1-.156.033.27.27 0 0 1-.138-.073.27.27 0 0 1-.078-.135.24.24 0 0 1 .029-.157z"
          opacity={0.4}
        />
      </svg>
    ))
);
CursorNavigationIconFilltone.displayName = "CursorNavigationIconFilltone";
export { CursorNavigationIconFilltone };
