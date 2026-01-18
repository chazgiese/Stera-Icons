import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShuffleIconBold = memo(
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
          d="M6 6c1.445 0 2.574.904 3.443 1.907.881 1.017 1.677 2.35 2.414 3.579.763 1.271 1.468 2.438 2.211 3.296C14.824 15.654 15.445 16 16 16h2.586l-.793-.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414l.793-.793H16c-1.445 0-2.574-.904-3.443-1.907-.881-1.017-1.677-2.35-2.414-3.578-.763-1.272-1.468-2.439-2.211-3.297C7.176 8.346 6.555 8 6 8H3a1 1 0 0 1 0-2z"
        />
        <path
          fill="currentColor"
          d="M8.392 14.21a1 1 0 0 1 1.601 1.196C9.027 16.7 7.735 18 6 18H3a1 1 0 0 1 0-2h3c.685 0 1.448-.53 2.392-1.79M17.793 3.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L18.586 8H16c-.686 0-1.45.53-2.394 1.794a1 1 0 0 1-1.602-1.197C12.97 7.303 14.264 6 16 6h2.586l-.793-.793a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ShuffleIconBold.displayName = "ShuffleIconBold";
export { ShuffleIconBold };
