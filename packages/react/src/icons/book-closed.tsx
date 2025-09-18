import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookClosed = memo(
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
          d="M16 7.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.6 1.25c.407 0 .759-.001 1.046.022.297.025.592.079.875.223.424.216.768.56.984.984.144.283.198.578.223.875.023.287.022.639.022 1.046V17a.75.75 0 0 1-.75.75c-.543 0-1.25.619-1.25 1.75s.707 1.75 1.25 1.75a.75.75 0 0 1 0 1.5H6.5a3.25 3.25 0 0 1-3.232-3.592A.8.8 0 0 1 3.25 19V7.6c0-.968 0-1.739.05-2.36.051-.63.16-1.172.413-1.67A4.25 4.25 0 0 1 5.57 1.713c.498-.254 1.04-.362 1.67-.413.621-.05 1.392-.05 2.36-.05zM6.5 17.75a1.75 1.75 0 0 0 0 3.5h11.184a3.75 3.75 0 0 1 0-3.5zm3.1-15c-.993 0-1.692 0-2.238.045-.537.044-.86.127-1.11.255A2.75 2.75 0 0 0 5.05 4.252c-.128.25-.211.573-.255 1.11-.045.546-.045 1.245-.045 2.238v9.162a3.23 3.23 0 0 1 1.75-.512h12.75V4.4c0-.432 0-.712-.018-.924-.016-.204-.045-.28-.064-.317a.75.75 0 0 0-.327-.327c-.037-.019-.113-.048-.317-.064a13 13 0 0 0-.924-.018z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookClosed.displayName = "BookClosed";
export { BookClosed };
