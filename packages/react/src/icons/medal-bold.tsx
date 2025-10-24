import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalIconBold = memo(
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
          d="M16.8 1c.543 0 1.011-.001 1.395.03.395.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.193.379.265.772.297 1.168.032.383.03.852.03 1.395v1.822c0 .646.014 1.207-.163 1.72a3 3 0 0 1-.693 1.121c-.38.388-.887.628-1.465.916l-2.985 1.492a6 6 0 1 1-7.388 0L5.321 10.78c-.577-.288-1.085-.528-1.465-.916a3 3 0 0 1-.692-1.12C2.987 8.228 3 7.667 3 7.022V5.2c0-.543-.001-1.012.03-1.395.032-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.167-.298C6.188 1 6.656 1 7.2 1zM12 13a3.996 3.996 0 0 0-4 4 4 4 0 1 0 4-4m-3-2.618 1.577.788.01-.003q.154-.037.31-.065.033-.007.067-.012.135-.024.274-.042l.048-.006A6 6 0 0 1 12 11a6 6 0 0 1 .716.042l.037.005q.142.018.285.044l.061.01q.16.03.316.067l.007.002L15 10.382V3H9zM7 3c-.465 0-.783.004-1.032.024-.272.023-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C5.001 4.25 5 4.624 5 5.2v1.822c0 .79.013.947.054 1.068.049.14.127.268.23.374.09.091.225.173.932.526L7 9.382zm10 6.382.784-.392c.707-.353.841-.435.93-.526.104-.106.183-.234.231-.374.042-.12.055-.278.055-1.068V5.2c0-.576-.002-.949-.025-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.436-.437c-.05-.025-.15-.062-.422-.085C17.782 3.004 17.465 3 17 3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MedalIconBold.displayName = "MedalIconBold";
export { MedalIconBold };
