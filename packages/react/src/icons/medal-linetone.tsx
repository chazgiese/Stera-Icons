import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalIconLinetone = memo(
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
          d="M16.8 1c.543 0 1.011-.001 1.395.03.395.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.193.379.265.772.297 1.168.032.383.03.852.03 1.395v1.822c0 .646.014 1.207-.163 1.72a3 3 0 0 1-.693 1.121c-.38.388-.887.628-1.465.916l-5.07 2.534-.388-.123A4 4 0 0 0 12 13c-.428 0-.838.067-1.221.19l-.388.123-5.07-2.534c-.577-.288-1.085-.528-1.465-.916a3 3 0 0 1-.692-1.12C2.987 8.228 3 7.667 3 7.022V5.2c0-.543-.001-1.012.03-1.395.032-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.167-.298C6.188 1 6.656 1 7.2 1zM9 10.382l1.577.788a6 6 0 0 1 2.845 0L15 10.382V3H9zM7 3c-.465 0-.783.004-1.033.024-.27.023-.372.06-.421.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C5.001 4.25 5 4.624 5 5.2v1.822c0 .79.013.947.054 1.068.049.14.127.268.23.374.09.091.225.173.932.526L7 9.382zm10 6.382.784-.392c.707-.353.841-.435.93-.526.104-.106.183-.234.231-.374.042-.12.055-.278.055-1.068V5.2c0-.576-.002-.949-.025-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.436-.437c-.05-.025-.15-.062-.422-.085C17.782 3.004 17.465 3 17 3z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 11a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MedalIconLinetone.displayName = "MedalIconLinetone";
export { MedalIconLinetone };
