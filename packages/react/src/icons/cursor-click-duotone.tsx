import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorClickIconDuotone = memo(
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
          d="M8.33 10.241c-.395-1.182.73-2.306 1.911-1.912l10.475 3.491c1.404.468 1.369 2.467-.05 2.885l-4.607 1.354-1.354 4.606c-.418 1.42-2.416 1.455-2.885.05zm1.425-.486-.005.007 3.493 10.48.003.007h.009l.009-.001.003-.007 1.47-4.997.032-.089a.75.75 0 0 1 .475-.419l4.997-1.47.007-.002.002-.01v-.008l-.008-.003L9.768 9.752 9.76 9.75q-.002 0-.006.005"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.47 12.47a.75.75 0 0 1 1.06 1.06l-1.414 1.415a.75.75 0 0 1-1.06-1.062zM1.514 6.996a.75.75 0 0 1 .92-.53l1.931.517a.75.75 0 1 1-.389 1.448l-1.931-.517a.75.75 0 0 1-.53-.918M13.884 3.055a.75.75 0 0 1 1.06 1.06L13.53 5.532a.75.75 0 0 1-1.06-1.062zM6.995 1.514c.4-.107.81.13.918.53l.517 1.932a.75.75 0 1 1-1.448.388l-.517-1.932a.75.75 0 0 1 .53-.918" />
        </g>
      </svg>
    ))
);
CursorClickIconDuotone.displayName = "CursorClickIconDuotone";
export { CursorClickIconDuotone };
