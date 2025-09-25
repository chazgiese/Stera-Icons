import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRotationRight = memo(
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
          d="M17.127 5.813a.75.75 0 0 1 1.06 0 8.75 8.75 0 0 1-5.863 14.931L12 20.75h-1.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H12l.269-.005a7.252 7.252 0 0 0 4.858-12.372.75.75 0 0 1 0-1.06M11.47.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H12l-.268.005a7.25 7.25 0 0 0-6.43 4.47 7.25 7.25 0 0 0 1.571 7.902.75.75 0 1 1-1.06 1.06 8.751 8.751 0 0 1 5.863-14.931L12 3.25h1.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowRotationRight.displayName = "ArrowRotationRight";
export { ArrowRotationRight };
