import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock11IconBoldDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v6l-.001.02q0 .034-.004.067l-.006.047a1 1 0 0 1-.083.287l-.017.033q-.01.024-.024.046l-.026.042-.024.034a1 1 0 0 1-.17.188l-.034.025q-.018.016-.037.028l-.046.03-.028.02-.017.007-.035.018-.048.024q-.031.014-.064.024l-.028.01q-.026.008-.052.015l-.046.012-.057.01-.035.005-.052.004-.058.003L12 13l-.02-.001a1 1 0 0 1-.212-.027l-.043-.012-.062-.02-.02-.007-.067-.029-.033-.015-.035-.02-.06-.036-.017-.01a1 1 0 0 1-.197-.18l-.02-.026-.034-.045-.03-.049-.017-.023-2-3.464a1 1 0 0 1 1.733-1l.134.232V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock11IconBoldDuotone.displayName = "Clock11IconBoldDuotone";
export { Clock11IconBoldDuotone };
