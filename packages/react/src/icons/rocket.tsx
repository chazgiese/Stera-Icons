import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Rocket = memo(
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
          d="M12 8.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.654 1.334a.75.75 0 0 1 .796.066c3.619 2.714 5.32 5.772 5.792 8.782l2.542 2.542a2.75 2.75 0 0 1 .759 2.45l-1.114 5.94c-.194 1.03-1.494 1.378-2.177.582l-1.988-2.32q-.257.448-.527.863A2.75 2.75 0 0 1 13 22.75h-2.001a2.75 2.75 0 0 1-2.738-2.51q-.27-.415-.527-.861l-1.986 2.318c-.683.796-1.983.448-2.177-.583l-1.114-5.938a2.75 2.75 0 0 1 .759-2.451l2.54-2.542c.472-3.01 2.175-6.068 5.794-8.782zM12 2.948C8.504 5.733 7.235 8.77 7.124 11.592c-.117 2.979 1.055 5.824 2.5 7.992a.75.75 0 0 1 .125.416c0 .69.56 1.25 1.25 1.25h2c.691 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .127-.416c1.445-2.168 2.616-5.013 2.499-7.992-.11-2.822-1.38-5.86-4.876-8.644M4.276 13.784a1.25 1.25 0 0 0-.344 1.114l1.016 5.425 1.983-2.311a1 1 0 0 1 .065-.068c-.759-1.653-1.303-3.529-1.373-5.507zm14.099-1.349c-.07 1.98-.614 3.854-1.373 5.508a1 1 0 0 1 .067.069l1.983 2.311 1.016-5.425a1.25 1.25 0 0 0-.344-1.114z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Rocket.displayName = "Rocket";
export { Rocket };
