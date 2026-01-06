import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommentBubbleIconDuotone = memo(
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
          d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75H9a.75.75 0 0 0 0-1.5h3A8.25 8.25 0 1 0 3.75 12v3a.75.75 0 0 0-1.5 0v-3c0-5.385 4.365-9.75 9.75-9.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3 14.25a.75.75 0 0 1 .75.75v2.8l.003.73c.003.205.01.375.021.523.024.287.067.424.113.514.12.235.31.427.546.546.09.046.227.09.514.113.296.024.68.024 1.253.024H9a.75.75 0 0 1 0 1.5H6.2c-.547 0-1.004.001-1.375-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073a10 10 0 0 1-.026-.621L2.25 17.8V15a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
CommentBubbleIconDuotone.displayName = "CommentBubbleIconDuotone";
export { CommentBubbleIconDuotone };
