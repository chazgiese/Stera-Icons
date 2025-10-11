import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilTipIconBold = memo(
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
          d="M12 1a1 1 0 0 1 .79.386l6.367 8.187c.546.702.843 1.567.843 2.456V22a1 1 0 1 1-2 0v-9.277l-1.012.578a3 3 0 0 1-2.976 0L13 12.723V22a1 1 0 1 1-2 0v-9.277l-1.012.578a3 3 0 0 1-2.976 0L6 12.723V22a1 1 0 0 1-2 0v-9.97c0-.89.297-1.755.843-2.457l6.368-8.187.075-.086A1 1 0 0 1 12 1m2.427 5.749a5.01 5.01 0 0 1-4.855 0l-3.075 3.954 1.507.862a1 1 0 0 0 .992 0l1.516-.866a3 3 0 0 1 2.976 0l1.516.866a1 1 0 0 0 .992 0l1.506-.862zm-3.6-1.613a3 3 0 0 0 2.346 0L12 3.628z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilTipIconBold.displayName = "PencilTipIconBold";
export { PencilTipIconBold };
