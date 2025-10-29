import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftRightIconBold = memo(
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
          d="M16.793 6.793a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 .067 1.34l-.067.074-4.5 4.5a1 1 0 0 1-1.414-1.414L19.586 13H4.414l2.793 2.793a1 1 0 0 1-1.414 1.414l-4.5-4.5-.068-.076a1 1 0 0 1 .068-1.338l4.5-4.5a1 1 0 0 1 1.414 1.414L4.414 11h15.172l-2.793-2.793a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowLeftRightIconBold.displayName = "ArrowLeftRightIconBold";
export { ArrowLeftRightIconBold };
