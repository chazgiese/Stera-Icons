import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AirplaneIcon = memo(
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
          d="M8.97 2.25a2.75 2.75 0 0 1 2.239 1.151l4.178 5.849h3.37c.995 0 1.949.396 2.652 1.1l1.121 1.122a.75.75 0 0 1 0 1.06l-1.122 1.121a3.75 3.75 0 0 1-2.65 1.097h-3.371l-4.178 5.849a2.75 2.75 0 0 1-2.238 1.151H7.758a1.25 1.25 0 0 1-1.149-1.742l2.27-5.295-2.95-.099-.917 1.621a2 2 0 0 1-1.74 1.015h-.713a1.25 1.25 0 0 1-1.243-1.388l.43-3.864-.43-3.86a1.25 1.25 0 0 1 1.24-1.389h.713c.721-.002 1.388.386 1.744 1.015l.917 1.62 2.949-.098-2.27-5.294A1.25 1.25 0 0 1 7.758 2.25zm1.72 7.454a.75.75 0 0 1-.665 1.046l-4.5.15a.75.75 0 0 1-.678-.38l-1.14-2.018a.5.5 0 0 0-.437-.254h-.432l.407 3.669a1 1 0 0 1 .005.099q-.001.031-.005.063l-.407 3.671h.433a.5.5 0 0 0 .435-.254l1.142-2.016a.75.75 0 0 1 .677-.38l4.5.15a.75.75 0 0 1 .664 1.046L8.138 20.25h.833c.403 0 .783-.195 1.017-.523l4.402-6.162a.75.75 0 0 1 .61-.315h3.758c.596 0 1.169-.237 1.59-.658L20.94 12l-.59-.59a2.25 2.25 0 0 0-1.592-.661H15a.75.75 0 0 1-.61-.315L9.988 4.273a1.25 1.25 0 0 0-1.017-.523h-.833z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AirplaneIcon.displayName = "AirplaneIcon";
export { AirplaneIcon };
