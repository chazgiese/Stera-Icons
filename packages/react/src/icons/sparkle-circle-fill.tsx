import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleCircleIconFill = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.269 4.537a.3.3 0 0 0-.538 0l-1.468 2.937a4 4 0 0 1-1.79 1.789L5.538 11.73a.3.3 0 0 0 0 .538l2.937 1.468a4 4 0 0 1 1.789 1.79l1.468 2.936a.3.3 0 0 0 .538 0l1.468-2.937a4 4 0 0 1 1.79-1.789l2.936-1.468a.3.3 0 0 0 0-.538l-2.937-1.468a4 4 0 0 1-1.789-1.79z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparkleCircleIconFill.displayName = "SparkleCircleIconFill";
export { SparkleCircleIconFill };
