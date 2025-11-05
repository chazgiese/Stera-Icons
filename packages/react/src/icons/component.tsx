import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ComponentIcon = memo(
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
          d="M10.763 14.177a1.75 1.75 0 0 1 2.475 0l2.585 2.586a1.75 1.75 0 0 1 0 2.474l-2.585 2.586a1.75 1.75 0 0 1-2.475 0l-2.586-2.585a1.75 1.75 0 0 1 0-2.475zm1.414 1.06a.25.25 0 0 0-.354 0l-2.585 2.586a.25.25 0 0 0 0 .354l2.585 2.586a.25.25 0 0 0 .354 0l2.586-2.586a.25.25 0 0 0 0-.354zM4.763 8.177a1.75 1.75 0 0 1 2.475 0l2.586 2.586a1.75 1.75 0 0 1 0 2.475l-2.586 2.585a1.75 1.75 0 0 1-2.475 0l-2.586-2.585a1.75 1.75 0 0 1 0-2.475zm1.414 1.06a.25.25 0 0 0-.353 0l-2.586 2.586a.25.25 0 0 0 0 .354l2.586 2.586a.25.25 0 0 0 .353 0l2.586-2.586a.25.25 0 0 0 0-.354zM16.763 8.177a1.75 1.75 0 0 1 2.475 0l2.585 2.586a1.75 1.75 0 0 1 0 2.475l-2.585 2.585a1.75 1.75 0 0 1-2.475 0l-2.586-2.585a1.75 1.75 0 0 1 0-2.475zm1.414 1.06a.25.25 0 0 0-.354 0l-2.585 2.586a.25.25 0 0 0 0 .354l2.585 2.586a.25.25 0 0 0 .354 0l2.586-2.586a.25.25 0 0 0 0-.354zM10.763 2.177a1.75 1.75 0 0 1 2.475 0l2.585 2.586a1.75 1.75 0 0 1 0 2.474l-2.585 2.586a1.75 1.75 0 0 1-2.475 0L8.177 7.237a1.75 1.75 0 0 1 0-2.474zm1.414 1.06a.25.25 0 0 0-.354 0L9.238 5.823a.25.25 0 0 0 0 .354l2.585 2.586a.25.25 0 0 0 .354 0l2.586-2.586a.25.25 0 0 0 0-.354z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ComponentIcon.displayName = "ComponentIcon";
export { ComponentIcon };
