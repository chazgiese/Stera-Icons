import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandRightIconFilltone = memo(
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
          d="M14 3a1 1 0 0 1 1 1v7.5a1 1 0 0 0 2 0V7a1 1 0 0 1 2 0v7a7 7 0 0 1-13.904 1.158 1 1 0 0 0-.022-.101l-.034-.099-1.221-3.116-.065-.135-.047-.092a1 1 0 0 1 1.779-.908l.005.008 1.65 2.794A1 1 0 0 0 9 13V5a1 1 0 0 1 2 0v6a1 1 0 0 0 2 0V4a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 1a3 3 0 0 1 3 3v.174A2.994 2.994 0 0 1 21 7v7a9 9 0 0 1-17.856 1.6l-1.165-2.972A3 3 0 0 1 7 9.382V5a3 3 0 0 1 4.473-2.612A3 3 0 0 1 14 1m0 2a1 1 0 0 0-1 1v7a1 1 0 1 1-2 0V5a1 1 0 1 0-2 0v8a1 1 0 0 1-1.86.509l-1.65-2.794-.004-.008a.997.997 0 0 0-1.366-.366 1 1 0 0 0-.413 1.274l.047.092.065.135 1.221 3.116.034.099q.013.05.022.101A7 7 0 0 0 19 14V7a1 1 0 1 0-2 0v4.5a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandRightIconFilltone.displayName = "HandRightIconFilltone";
export { HandRightIconFilltone };
