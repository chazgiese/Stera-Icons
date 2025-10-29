import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRightIconFilltone = memo(
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
        <path fill="currentColor" d="M12 13H5a1 1 0 1 1 0-2h7z" opacity={0.4} />
        <path
          fill="currentColor"
          d="M12.617 5.076a1 1 0 0 1 1.09.217l6 6a1 1 0 0 1 0 1.414l-6 6A1 1 0 0 1 12 18V6a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ArrowRightIconFilltone.displayName = "ArrowRightIconFilltone";
export { ArrowRightIconFilltone };
