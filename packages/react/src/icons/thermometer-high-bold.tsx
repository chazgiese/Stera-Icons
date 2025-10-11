import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThermometerHighIconBold = memo(
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
          d="M12 4a1 1 0 0 1 1 1v8.113c0 .636.428 1.176.917 1.582a3 3 0 1 1-3.834 0c.489-.406.917-.946.917-1.582V5a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1a4 4 0 0 1 4 4v7.5c0-.006-.002-.003.006.013a.2.2 0 0 0 .055.07 6 6 0 1 1-8.121 0 .2.2 0 0 0 .054-.07c.008-.016.006-.02.006-.013V5a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v7.5c0 .645-.31 1.19-.707 1.555a4 4 0 1 0 5.414 0C14.31 13.69 14 13.145 14 12.5V5a2 2 0 0 0-2-2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ThermometerHighIconBold.displayName = "ThermometerHighIconBold";
export { ThermometerHighIconBold };
