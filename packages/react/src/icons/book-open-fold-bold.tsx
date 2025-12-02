import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenFoldIconBold = memo(
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
          d="M18 .5a1 1 0 0 1 1 1v1.522c1 .06 2.093.245 3.282.594a1 1 0 0 1 .718.96v13.367a1 1 0 0 1-1.282.96c-3.268-.96-5.514-.464-6.914.2a6.4 6.4 0 0 0-1.556 1.028 4.5 4.5 0 0 0-.433.448q-.005.007-.01.01a1 1 0 0 1-1.614 0q-.004-.003-.008-.01l-.077-.09a5 5 0 0 0-.356-.358 6.4 6.4 0 0 0-1.555-1.027c-1.4-.665-3.645-1.16-6.913-.2A1 1 0 0 1 1 17.943V4.575a1 1 0 0 1 .718-.96c3.732-1.096 6.486-.565 8.336.314.461.219.862.456 1.203.691.1-.329.236-.677.424-1.027a5.34 5.34 0 0 1 2.154-2.166C14.881.848 16.244.5 18 .5M9.195 5.736C7.901 5.122 5.882 4.652 3 5.345v11.317c3.088-.643 5.422-.14 7.054.635.35.166.665.343.945.521V7.005a5 5 0 0 0-.249-.241 6.4 6.4 0 0 0-1.555-1.028M19 13.5a1 1 0 0 1-1 1c-2.283 0-3.446.887-4.092 1.848-.275.409-.467.853-.604 1.286q.299-.174.642-.337c1.632-.774 3.966-1.278 7.054-.635V5.345a12 12 0 0 0-2-.317zM17 2.549c-.964.099-1.672.338-2.194.628-.683.378-1.1.872-1.363 1.362-.267.5-.381 1.01-.426 1.404a4 4 0 0 0-.024.577l.001.02q.005.045.005.09v7.694c.92-.912 2.216-1.59 4.001-1.773z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="m11.191 20.589.002.004z" />
      </svg>
    ))
);
BookOpenFoldIconBold.displayName = "BookOpenFoldIconBold";
export { BookOpenFoldIconBold };
