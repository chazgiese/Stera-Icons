import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TagIconFilltone = memo(
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
          d="M11.675 2c.441 0 .825-.006 1.197.083.306.073.599.195.867.36.163.1.312.218.458.35l.447.437.019.018.005.006 6.276 6.276c.384.384.716.715.965 1.008.257.302.484.631.615 1.035a3 3 0 0 1 0 1.854c-.131.403-.358.732-.615 1.035-.25.293-.58.623-.965 1.008l-5.474 5.474c-.385.384-.715.716-1.008.965-.303.257-.632.484-1.035.615a3 3 0 0 1-1.854 0c-.404-.131-.733-.358-1.035-.615-.293-.25-.624-.58-1.008-.965l-6.3-6.3c-.312-.312-.588-.579-.788-.905a3 3 0 0 1-.36-.867C1.995 12.5 2 12.116 2 11.675V6.2c0-.543-.001-1.012.03-1.395.032-.396.104-.79.297-1.167a3 3 0 0 1 1.31-1.311c.379-.193.772-.265 1.168-.297C5.188 2 5.657 2 6.2 2zM7.75 6a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.75 6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
      </svg>
    ))
);
TagIconFilltone.displayName = "TagIconFilltone";
export { TagIconFilltone };
