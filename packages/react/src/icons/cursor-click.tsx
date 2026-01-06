import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorClickIcon = memo(
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
          d="M8.329 10.24c-.393-1.18.73-2.305 1.912-1.911l10.475 3.491c1.404.468 1.369 2.467-.051 2.885l-4.607 1.354-1.353 4.606c-.418 1.42-2.417 1.455-2.885.05zm1.426-.485-.005.006 3.493 10.48q.002.006.003.008h.009l.008-.001q.001-.001.003-.007l1.47-4.997.032-.089a.75.75 0 0 1 .476-.419l4.997-1.47.007-.003.002-.008-.001-.01-.007-.002L9.767 9.752l-.006-.002q-.002 0-.006.005"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M4.47 12.47a.751.751 0 0 1 1.061 1.06l-1.415 1.415a.75.75 0 0 1-1.06-1.062zM1.514 6.996a.75.75 0 0 1 .92-.53l1.931.517a.75.75 0 1 1-.389 1.448l-1.931-.517a.75.75 0 0 1-.53-.918M13.884 3.055a.751.751 0 0 1 1.061 1.06L13.53 5.532a.75.75 0 0 1-1.06-1.062zM6.995 1.514c.4-.107.81.13.918.53l.517 1.932a.75.75 0 1 1-1.448.388l-.517-1.932a.75.75 0 0 1 .53-.918"
        />
      </svg>
    ))
);
CursorClickIcon.displayName = "CursorClickIcon";
export { CursorClickIcon };
