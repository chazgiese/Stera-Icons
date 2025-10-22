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
          d="M8.329 10.24c-.394-1.18.73-2.305 1.912-1.911l10.474 3.49c1.405.469 1.37 2.467-.05 2.886l-4.607 1.354-1.353 4.606c-.418 1.42-2.417 1.455-2.885.05zm1.426-.486-.005.007 3.493 10.48q.001.006.003.008h.008l.01-.001.002-.007 1.47-4.997.032-.09a.75.75 0 0 1 .476-.418l4.997-1.47q.006-.001.007-.003l.002-.009-.001-.008-.007-.003L9.767 9.752 9.76 9.75z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M4.47 12.47a.751.751 0 0 1 1.06 1.06l-1.414 1.415a.75.75 0 0 1-1.06-1.062zM1.514 6.996a.75.75 0 0 1 .92-.53l1.93.517a.75.75 0 1 1-.388 1.448l-1.931-.517a.75.75 0 0 1-.53-.918M13.883 3.055a.751.751 0 0 1 1.062 1.06L13.53 5.532a.75.75 0 0 1-1.06-1.062zM6.995 1.514c.4-.107.81.13.918.53l.517 1.932a.75.75 0 1 1-1.448.388l-.518-1.932a.75.75 0 0 1 .53-.918"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.329 10.24c-.394-1.181.73-2.305 1.912-1.912l10.474 3.492c1.405.468 1.37 2.466-.05 2.884l-4.607 1.355-1.353 4.605c-.418 1.42-2.417 1.456-2.885.051zm1.426-.486q-.005.006-.005.007l3.493 10.48q.001.006.003.007l.008.001.01-.002.002-.006 1.47-4.998.032-.088a.75.75 0 0 1 .476-.42l4.997-1.47.007-.002.002-.009-.001-.009-.007-.002L9.767 9.75 9.76 9.75z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M4.47 12.469a.751.751 0 0 1 1.06 1.06l-1.414 1.416a.75.75 0 0 1-1.06-1.062zM1.514 6.995a.75.75 0 0 1 .92-.53l1.93.518a.75.75 0 1 1-.388 1.448l-1.931-.518a.75.75 0 0 1-.53-.918M13.883 3.055a.751.751 0 0 1 1.062 1.06L13.53 5.532a.75.75 0 0 1-1.06-1.062zM6.995 1.514c.4-.107.81.13.918.53l.517 1.932a.75.75 0 1 1-1.448.388l-.518-1.932a.75.75 0 0 1 .53-.918"
        />
      </svg>
    ))
);
CursorClickIcon.displayName = "CursorClickIcon";
export { CursorClickIcon };
