import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FortressIconDuotone = memo(
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
          d="M4.105 3.258a.75.75 0 0 1 .566.407l.793 1.585h1.072l.793-1.585A.75.75 0 0 1 8 3.25h2a.75.75 0 0 1 .75.75v4.25h2.5V4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .67.415l.794 1.585h1.072l.793-1.585a.75.75 0 0 1 .566-.407L20 3.25h2a.75.75 0 0 1 .75.75v15.25h-1.5V4.75h-.786l-.793 1.585A.75.75 0 0 1 19 6.75h-2a.75.75 0 0 1-.67-.415l-.794-1.585h-.786V9a.75.75 0 0 1-.75.75h-4A.75.75 0 0 1 9.25 9V4.75h-.786L7.67 6.335A.75.75 0 0 1 7 6.75H5a.75.75 0 0 1-.67-.415L3.535 4.75H2.75v14.5h-1.5V4A.75.75 0 0 1 2 3.25h2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 13.25A3.75 3.75 0 0 1 15.75 17v2.25H23a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5h.25V17a2.25 2.25 0 0 0-4.5 0v2.25H10a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1 0-1.5h7.25V17A3.75 3.75 0 0 1 12 13.25M6 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5A.75.75 0 0 1 6 8.75M18 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
FortressIconDuotone.displayName = "FortressIconDuotone";
export { FortressIconDuotone };
