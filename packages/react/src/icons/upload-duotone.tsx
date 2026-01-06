import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UploadIconDuotone = memo(
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
          d="M21 14.25a.75.75 0 0 1 .75.75c0 .921 0 1.65-.04 2.24-.04.595-.125 1.103-.321 1.577a4.75 4.75 0 0 1-2.572 2.572c-.474.196-.982.28-1.578.321-.589.04-1.318.04-2.239.04H9c-.921 0-1.65 0-2.24-.04-.595-.04-1.103-.125-1.577-.321a4.75 4.75 0 0 1-2.572-2.572c-.196-.474-.28-.982-.321-1.578-.04-.589-.04-1.318-.04-2.239a.75.75 0 0 1 1.5 0c0 .942 0 1.611.036 2.138.036.52.103.845.211 1.106a3.25 3.25 0 0 0 1.759 1.759c.26.108.587.175 1.106.21.527.037 1.196.037 2.138.037h6c.942 0 1.611 0 2.138-.036.52-.036.845-.103 1.106-.211a3.25 3.25 0 0 0 1.759-1.759c.108-.26.175-.587.21-1.106.037-.527.037-1.196.037-2.138a.75.75 0 0 1 .75-.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.527 2.418a.75.75 0 0 1 1.003.052l6 6a.75.75 0 0 1-1.06 1.06l-4.72-4.72V16a.75.75 0 0 1-1.5 0V4.81L6.53 9.53a.75.75 0 1 1-1.06-1.06l6-6z"
        />
      </svg>
    ))
);
UploadIconDuotone.displayName = "UploadIconDuotone";
export { UploadIconDuotone };
