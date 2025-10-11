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
          d="M8.329 10.24c-.394-1.18.73-2.305 1.912-1.911l10.474 3.491c1.405.468 1.37 2.467-.05 2.885l-4.607 1.354-1.353 4.606c-.418 1.42-2.417 1.455-2.885.05zm1.426-.485q-.005.005-.005.006l3.493 10.48q.001.006.003.008h.008l.01-.001.002-.007 1.47-4.997.032-.09a.75.75 0 0 1 .476-.418l4.997-1.47.007-.003.002-.008-.001-.01-.007-.002L9.767 9.752 9.76 9.75z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M4.47 12.47a.75.75 0 0 1 1.06 1.06l-1.414 1.415a.75.75 0 0 1-1.06-1.062zM1.514 6.995a.75.75 0 0 1 .92-.53l1.93.517a.75.75 0 1 1-.388 1.448l-1.931-.517a.75.75 0 0 1-.53-.918M13.883 3.055a.75.75 0 0 1 1.061 1.06L13.53 5.53a.75.75 0 1 1-1.06-1.06zM6.995 1.514c.4-.107.81.13.918.53l.517 1.932a.75.75 0 0 1-1.448.389l-.518-1.933a.75.75 0 0 1 .53-.918"
        />
      </svg>
    ))
);
CursorClickIcon.displayName = "CursorClickIcon";
export { CursorClickIcon };
