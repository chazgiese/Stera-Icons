import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideCrossIconBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M3.057 13A9 9 0 0 0 11 20.942V13zM13 13v7.942A9 9 0 0 0 20.943 13zm0-2h7.943A9 9 0 0 0 13 3.057zm-2-7.943A9 9 0 0 0 3.057 11H11z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideCrossIconBold.displayName = "CircleDivideCrossIconBold";
export { CircleDivideCrossIconBold };
