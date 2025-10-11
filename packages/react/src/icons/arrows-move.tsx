import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsMoveIcon = memo(
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
          d="M12 1.25c.199 0 .39.08.53.22l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72v7.44h7.44l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3 .094.114a.75.75 0 0 1-.094.946l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-7.44v7.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-.946.094l-.114-.094-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-7.44H3.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1-.094-.946l.094-.114 3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72h7.44V3.81L9.53 5.53a.75.75 0 1 1-1.06-1.06l3-3 .114-.094A.75.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
ArrowsMoveIcon.displayName = "ArrowsMoveIcon";
export { ArrowsMoveIcon };
