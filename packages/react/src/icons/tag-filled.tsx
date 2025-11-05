import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TagIconFilled = memo(
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
          d="M11.675 2c.441 0 .825-.006 1.197.083.306.074.6.195.867.36.163.1.312.218.458.351l.448.437.018.017.005.006 6.276 6.276c.385.385.716.715.965 1.008.257.303.484.632.616 1.035a3 3 0 0 1 0 1.854c-.132.404-.359.733-.616 1.035-.249.293-.58.624-.965 1.008l-5.474 5.474c-.385.385-.715.716-1.008.965-.302.257-.631.484-1.035.616a3 3 0 0 1-1.854 0c-.403-.132-.732-.36-1.035-.616-.293-.249-.623-.58-1.008-.965l-6.3-6.3c-.312-.311-.588-.579-.788-.905a3 3 0 0 1-.359-.867C1.993 12.5 2 12.116 2 11.675V6.2c0-.543-.001-1.012.03-1.395.033-.395.105-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.193.773-.265 1.168-.298C5.188 2 5.657 2 6.2 2zM7.75 6a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TagIconFilled.displayName = "TagIconFilled";
export { TagIconFilled };
