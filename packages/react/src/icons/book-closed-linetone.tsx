import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookClosedIconLinetone = memo(
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
          d="M17.6 1c.403 0 .767-.001 1.067.023.312.026.643.084.968.25a2.5 2.5 0 0 1 1.092 1.092c.166.325.224.656.25.968.024.3.023.664.023 1.067V17a1 1 0 0 1-1 1c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5a1 1 0 1 1 0 2H6.5a3.5 3.5 0 0 1-3.484-3.827A1 1 0 0 1 3 19V7.6c0-.964-.001-1.747.05-2.38.054-.646.166-1.224.44-1.763A4.5 4.5 0 0 1 5.457 1.49c.539-.274 1.117-.386 1.763-.44C7.853 1 8.636 1 9.6 1zM6.5 18a1.5 1.5 0 0 0 0 3h10.795A4 4 0 0 1 17 19.5c0-.51.103-1.026.295-1.5zM9.6 3c-.997 0-1.684 0-2.217.044-.522.043-.808.122-1.018.228-.47.24-.853.623-1.093 1.093-.106.21-.185.496-.228 1.018C5 5.916 5 6.603 5 7.6v8.736A3.5 3.5 0 0 1 6.5 16H19V4.4c0-.436-.001-.704-.018-.904a1.3 1.3 0 0 0-.024-.184q-.006-.023-.01-.03l-.003-.009a.5.5 0 0 0-.218-.218l-.008-.003-.032-.01a1.3 1.3 0 0 0-.183-.024C18.304 3 18.036 3 17.6 3z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13 10a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 6a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
BookClosedIconLinetone.displayName = "BookClosedIconLinetone";
export { BookClosedIconLinetone };
