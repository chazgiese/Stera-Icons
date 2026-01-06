import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const YinYangIconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m5.052 3.003A5.75 5.75 0 0 1 12 12.75a4.25 4.25 0 0 0 0 8.5 9.25 9.25 0 0 0 5.052-16.997M12 2.75a9.25 9.25 0 0 0-5.053 16.996A5.75 5.75 0 0 1 12 11.25a4.25 4.25 0 0 0 0-8.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 15.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
YinYangIconDuotone.displayName = "YinYangIconDuotone";
export { YinYangIconDuotone };
