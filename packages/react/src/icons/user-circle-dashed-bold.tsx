import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircleDashedIconBold = memo(
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
          d="M13.758 20.83a1 1 0 1 1 .388 1.961A11 11 0 0 1 12 23q-1.1-.002-2.146-.209a1 1 0 0 1 .388-1.962Q11.096 21 12 21q.904-.002 1.758-.17"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 6a5 5 0 0 1 3.398 8.665 9 9 0 0 1 3.723 2.834 9 9 0 0 0 .363-.499 1 1 0 0 1 1.662 1.112 11.1 11.1 0 0 1-3.034 3.035A1 1 0 1 1 17 19.484q.37-.248.713-.53A6.99 6.99 0 0 0 12 16a6.99 6.99 0 0 0-5.714 2.954q.344.282.714.53a1 1 0 0 1-1.112 1.662 11.1 11.1 0 0 1-3.034-3.034A1 1 0 1 1 4.516 17q.172.256.362.499A9 9 0 0 1 8.6 14.665 5 5 0 0 1 12 6m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M1.209 9.854a1 1 0 0 1 1.962.388A9 9 0 0 0 3 12q.002.904.17 1.758a1 1 0 1 1-1.961.388A11 11 0 0 1 1 12q.002-1.1.209-2.146M21.615 9.067a1 1 0 0 1 1.176.787Q22.998 10.9 23 12q-.002 1.1-.209 2.146a1 1 0 0 1-1.962-.388Q21 12.904 21 12q-.002-.904-.17-1.758a1 1 0 0 1 .785-1.175M5.888 2.854A1 1 0 1 1 7 4.516 9.1 9.1 0 0 0 4.516 7a1 1 0 0 1-1.662-1.112 11.1 11.1 0 0 1 3.034-3.034M16.726 3.128a1 1 0 0 1 1.386-.274c1.2.802 2.232 1.835 3.035 3.034A1 1 0 1 1 19.484 7 9.1 9.1 0 0 0 17 4.516a1 1 0 0 1-.274-1.388M12 1q1.1.002 2.146.209a1 1 0 0 1-.388 1.962A9 9 0 0 0 12 3q-.904.002-1.758.17a1 1 0 1 1-.388-1.961A11 11 0 0 1 12 1"
        />
      </svg>
    ))
);
UserCircleDashedIconBold.displayName = "UserCircleDashedIconBold";
export { UserCircleDashedIconBold };
