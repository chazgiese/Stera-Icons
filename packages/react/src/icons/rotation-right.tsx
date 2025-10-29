import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationRightIcon = memo(
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
          d="M18.187 5.813a.75.75 0 0 0-1.06 1.06 7.251 7.251 0 0 1-4.859 12.372L12 19.25h-1.19l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H12l.324-.006a8.751 8.751 0 0 0 5.863-14.931M12.53.47a.75.75 0 0 0-1.06 1.06l1.72 1.72H12l-.324.006a8.75 8.75 0 0 0-5.864 14.932.75.75 0 0 0 1.06-1.06 7.251 7.251 0 0 1 4.86-12.373L12 4.75h1.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"
        />
      </svg>
    ))
);
RotationRightIcon.displayName = "RotationRightIcon";
export { RotationRightIcon };
