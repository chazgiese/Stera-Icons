import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeftIconDuotone = memo(
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
          d="M12.117 2.323c.787-.787 2.133-.23 2.133.884V8a.75.75 0 0 1-1.5 0V3.81l-7.836 7.836a.5.5 0 0 0 0 .707l7.836 7.836v-4.19a.75.75 0 0 1 1.5 0v4.794c0 1.113-1.346 1.67-2.133.883l-8.263-8.262a2 2 0 0 1 0-2.828z"
        />
        <path
          fill="currentColor"
          d="M18.5 7.25a2.25 2.25 0 0 1 2.25 2.25v5a2.25 2.25 0 0 1-2.25 2.25h-4.25V16a.75.75 0 0 0-.75-.75h5a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 .75-.75v-.75z"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowBigLeftIconDuotone.displayName = "ArrowBigLeftIconDuotone";
export { ArrowBigLeftIconDuotone };
