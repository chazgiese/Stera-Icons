import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandRightBold = memo(
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
          d="M14 1a3 3 0 0 1 3 3v.174A3 3 0 0 1 21 7v7a9 9 0 0 1-17.857 1.6l-1.165-2.972a3 3 0 0 1 5.021-3.246V5a3 3 0 0 1 4.473-2.612A3 3 0 0 1 14 1m0 2a1 1 0 0 0-1 1v7a1 1 0 0 1-2 0V5a1 1 0 0 0-2 0v8a1 1 0 0 1-1.86.509l-1.65-2.794-.005-.008a.997.997 0 0 0-1.366-.366 1 1 0 0 0-.413 1.274l.047.092.065.135 1.221 3.116.034.099q.013.05.022.101A7 7 0 0 0 19 14V7a1 1 0 0 0-2 0v4.5a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandRightBold.displayName = "HandRightBold";
export { HandRightBold };
