import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const YinYangIconBoldDuotone = memo(
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
          d="M12 1q.156 0 .312.008C18.242 1.173 23 6.029 23 12c0 6.075-4.925 11-11 11q-.157 0-.312-.009C5.757 22.826 1 17.971 1 12 1 5.925 5.925 1 12 1m5.657 4.002A6 6 0 0 1 12 13a4 4 0 0 0-.213 7.994q.106.004.213.006a9 9 0 0 0 5.657-15.998M12 3a9 9 0 0 0-5.658 15.997A6 6 0 0 1 12 11a4 4 0 0 0 .212-7.995Q12.107 3 12 3"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 15.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M12 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
      </svg>
    ))
);
YinYangIconBoldDuotone.displayName = "YinYangIconBoldDuotone";
export { YinYangIconBoldDuotone };
