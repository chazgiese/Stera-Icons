import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCent = memo(
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
          d="M12 1a1 1 0 0 1 1 1v2.518q.363.024.725.083a7.5 7.5 0 0 1 3.947 1.967 1 1 0 1 1-1.38 1.449A5.5 5.5 0 0 0 13 6.523v10.954q.505-.046.997-.185a5.5 5.5 0 0 0 2.716-1.757 1 1 0 0 1 1.532 1.286A7.5 7.5 0 0 1 13 19.481V22a1 1 0 0 1-2 0v-2.653a7.5 7.5 0 0 1 0-14.694V2a1 1 0 0 1 1-1m-1 5.708a5.502 5.502 0 0 0-3.991 5.599A5.5 5.5 0 0 0 11 17.29z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurrencyCent.displayName = "CurrencyCent";
export { CurrencyCent };
