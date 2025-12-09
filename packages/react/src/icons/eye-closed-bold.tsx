import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconBold = memo(
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
          d="M20.071 8.536a1 1 0 1 1 1.77.928c-.375.717-.838 1.385-1.374 1.994l1.713 1.587a1 1 0 0 1-1.36 1.467l-1.814-1.681a11.2 11.2 0 0 1-3.194 1.728l.626 2.164a1 1 0 1 1-1.921.554l-.646-2.23a11.8 11.8 0 0 1-3.743 0l-.644 2.23a1 1 0 0 1-1.921-.555l.625-2.163a11.2 11.2 0 0 1-3.195-1.728L3.18 14.51a1 1 0 0 1-1.36-1.466l1.712-1.587a10.2 10.2 0 0 1-1.374-1.994 1 1 0 1 1 1.77-.928c1.11 2.115 3.19 3.744 5.732 4.375l.042.01.011.004a9.7 9.7 0 0 0 4.573 0l.012-.003.041-.011c2.543-.63 4.623-2.26 5.732-4.375"
        />
      </svg>
    ))
);
EyeClosedIconBold.displayName = "EyeClosedIconBold";
export { EyeClosedIconBold };
