import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorNavigationIconDuotone = memo(
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
          d="M12 3.295a.49.49 0 0 0-.447.276l-8.1 16.2a.5.5 0 0 0 .687.662l6.22-3.393c.295-.16.624-.245.959-.245H12v1.5h-.681a.5.5 0 0 0-.24.061L4.86 21.75c-1.72.938-3.623-.899-2.747-2.65l8.1-16.2A1.99 1.99 0 0 1 12 1.795z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 1.795c.703 0 1.421.37 1.79 1.105l8.099 16.2c.875 1.751-1.028 3.588-2.747 2.65l-6.221-3.394a.5.5 0 0 0-.24-.061H12v-1.5h.682c.334 0 .663.085.957.245l6.221 3.393a.5.5 0 0 0 .687-.663l-8.1-16.199A.49.49 0 0 0 12 3.295z"
        />
      </svg>
    ))
);
CursorNavigationIconDuotone.displayName = "CursorNavigationIconDuotone";
export { CursorNavigationIconDuotone };
