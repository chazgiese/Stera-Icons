import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeft = memo(
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
          d="M12.116 2.323c.788-.787 2.134-.23 2.134.884V7.25H18A2.75 2.75 0 0 1 20.75 10v4A2.75 2.75 0 0 1 18 16.75h-3.75v4.043c0 1.113-1.346 1.67-2.134.883l-8.262-8.262a2 2 0 0 1 0-2.828zm-7.202 9.323a.5.5 0 0 0 0 .707l7.836 7.836v-4.19a.75.75 0 0 1 .75-.75H18c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-4.5a.75.75 0 0 1-.75-.75V3.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigLeft.displayName = "ArrowBigLeft";
export { ArrowBigLeft };
