import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIconBold = memo(
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
          d="M17 2a1 1 0 1 1 0 2h-5.5a3.5 3.5 0 0 0-.144 6.996h10.649a1 1 0 1 1 0 2h-4.266A5.5 5.5 0 0 1 13.5 22H7.001a1 1 0 1 1 0-2h6.5a3.5 3.5 0 1 0 0-7h-1l-.082-.004h-.336L12 13h-.5q-.081 0-.162-.004H2.005a1 1 0 1 1 0-2h5.249A5.5 5.5 0 0 1 11.5 2z"
        />
      </svg>
    ))
);
TextStrikethroughIconBold.displayName = "TextStrikethroughIconBold";
export { TextStrikethroughIconBold };
