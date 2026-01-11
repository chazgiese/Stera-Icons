import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForkKnifeIconBold = memo(
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
          d="M10 2a1 1 0 0 1 1 1v6l-.002.024v.02l-.003.058a1 1 0 0 1-.076.291L9.742 12.14c-.16.374-.242.776-.242 1.182V19.5a2.5 2.5 0 0 1-5 0V13.32c0-.406-.082-.808-.242-1.181L3.087 9.407a1 1 0 0 1-.085-.363l-.001-.02L3 9V3a1 1 0 0 1 2 0v5h1V3.5a1 1 0 0 1 2 0V8h1V3a1 1 0 0 1 1-1M6.096 11.35c.266.623.404 1.293.404 1.97V19.5a.5.5 0 0 0 1 0V13.32c0-.677.138-1.347.404-1.97L8.484 10H5.516zM19.772 2.026A1 1 0 0 1 21 3v16.5a2.5 2.5 0 0 1-5 0V16h-2a1 1 0 0 1-1-.998c-.008-4.298.349-7.256 1.408-9.287 1.122-2.15 2.946-3.121 5.364-3.689M18 19.5a.5.5 0 0 0 1 0V16h-1zm1-15.171c-1.37.487-2.229 1.182-2.818 2.311-.747 1.431-1.125 3.67-1.175 7.36H19z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ForkKnifeIconBold.displayName = "ForkKnifeIconBold";
export { ForkKnifeIconBold };
