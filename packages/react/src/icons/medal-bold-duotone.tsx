import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalIconBoldDuotone = memo(
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
          d="M16.8 1c.543 0 1.011-.001 1.395.03.395.033.789.105 1.167.297a3 3 0 0 1 1.31 1.31c.193.379.265.772.297 1.168.032.383.03.852.03 1.395v2.291c-.004.454-.03.866-.163 1.251a3 3 0 0 1-.693 1.121c-.38.388-.887.628-1.465.916l-2.987 1.492a6 6 0 0 0-2.314-1.11l.045.009L15 10.382V3H9v7.382l1.577.788.062-.014c-.863.2-1.656.587-2.332 1.115L5.321 10.78c-.577-.288-1.085-.528-1.465-.916a3 3 0 0 1-.692-1.12C2.987 8.228 3 7.667 3 7.022V5.2c0-.543-.001-1.012.03-1.395.032-.395.104-.79.297-1.167a3 3 0 0 1 1.31-1.31c.379-.193.772-.265 1.167-.298C6.188 1 6.657 1 7.2 1zM7 3c-.465 0-.783.004-1.032.024-.272.023-.373.06-.422.085-.188.096-.341.25-.437.437-.025.05-.063.15-.085.422C5.001 4.25 5 4.624 5 5.2v1.822c0 .79.013.947.054 1.068.049.14.127.268.23.374.09.091.225.173.932.526L7 9.382zm10 6.382.784-.392c.706-.353.841-.435.93-.526.104-.106.183-.234.231-.374.042-.12.055-.278.055-1.068V5.2c0-.576-.002-.949-.025-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.436-.437c-.05-.025-.151-.062-.422-.085C17.783 3.004 17.465 3 17 3z"
          clipRule="evenodd"
          opacity={0.4}
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
MedalIconBoldDuotone.displayName = "MedalIconBoldDuotone";
export { MedalIconBoldDuotone };
