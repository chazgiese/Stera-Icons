import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlayRectangleIconFilltone = memo(
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
          d="M14 3c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C23 9.519 23 10.617 23 12s0 2.481-.071 3.365c-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C16.481 21 15.384 21 14 21h-4c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 14.481 1 13.383 1 12s0-2.481.071-3.365c.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.519 3 8.616 3 10 3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9.69 6.87c.335-.02.74.25 1.547.788l4.516 3.011c.668.445 1.002.668 1.118.948a1 1 0 0 1 0 .766c-.116.28-.45.503-1.118.948l-4.516 3.01c-.808.54-1.212.809-1.547.789a1 1 0 0 1-.738-.396c-.202-.267-.202-.753-.202-1.723V8.989c0-.97 0-1.456.202-1.723.177-.234.447-.378.738-.396"
        />
      </svg>
    ))
);
PlayRectangleIconFilltone.displayName = "PlayRectangleIconFilltone";
export { PlayRectangleIconFilltone };
