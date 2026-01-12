import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextSparkleIconBold = memo(
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
          d="M16.387 10.258c.203-.581 1.023-.581 1.226 0l.242.691a5.2 5.2 0 0 0 3.196 3.196l.691.242c.581.203.581 1.023 0 1.226l-.691.242a5.2 5.2 0 0 0-3.195 3.196l-.243.691c-.203.581-1.023.581-1.226 0l-.242-.691a5.2 5.2 0 0 0-3.196-3.195l-.691-.243c-.581-.203-.581-1.023 0-1.226l.691-.242a5.2 5.2 0 0 0 3.196-3.196zM8.103 17.005a1 1 0 0 1 0 1.99L8 19H3a1 1 0 1 1 0-2h5zM8.103 11.005a1 1 0 0 1 0 1.99L8 13H3a1 1 0 1 1 0-2h5zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TextSparkleIconBold.displayName = "TextSparkleIconBold";
export { TextSparkleIconBold };
