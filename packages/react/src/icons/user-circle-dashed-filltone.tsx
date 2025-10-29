import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircleDashedIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="m5.895 21.15-.007-.003-.157-.11q.081.056.164.113M18.112 21.147l-.007.003q.082-.056.164-.114-.078.056-.157.11M3.128 16.726A1 1 0 0 1 4.516 17q.172.256.362.499-.418.54-.752 1.14L4 18.865v.68c-.42-.445-.805-.923-1.146-1.433a1 1 0 0 1 .274-1.386M19.484 17a1 1 0 0 1 1.662 1.112c-.341.51-.726.988-1.146 1.433v-.68l-.126-.226q-.335-.6-.753-1.14a9 9 0 0 0 .363-.499M1.209 9.854a1 1 0 0 1 1.962.388A9 9 0 0 0 3 12q.002.904.17 1.758a1 1 0 1 1-1.961.388A11 11 0 0 1 1 12q.002-1.1.209-2.146M21.615 9.067a1 1 0 0 1 1.176.787Q22.998 10.9 23 12q-.002 1.1-.209 2.146a1 1 0 0 1-1.962-.388Q21 12.904 21 12q-.002-.904-.17-1.758a1 1 0 0 1 .785-1.175M5.888 2.854A1 1 0 1 1 7 4.516 9.1 9.1 0 0 0 4.516 7a1 1 0 0 1-1.662-1.112 11.1 11.1 0 0 1 3.034-3.034M16.726 3.128a1 1 0 0 1 1.386-.274c1.2.802 2.232 1.835 3.035 3.034A1 1 0 1 1 19.484 7 9.1 9.1 0 0 0 17 4.516a1 1 0 0 1-.274-1.388M12 1q1.1.002 2.146.209a1 1 0 0 1-.388 1.962A9 9 0 0 0 12 3q-.904.002-1.758.17a1 1 0 1 1-.388-1.961A11 11 0 0 1 12 1M9.854 22.791l-.016-.005zM14.161 22.786l-.015.005z" />
        </g>
        <path
          fill="currentColor"
          d="M12 6a5 5 0 0 1 3.398 8.665 9.03 9.03 0 0 1 4.476 3.974l.126.226v.697l-.3.293A10.97 10.97 0 0 1 12 23c-2.998 0-5.717-1.2-7.7-3.145l-.3-.294v-.696l.126-.226a9.03 9.03 0 0 1 4.475-3.974A5 5 0 0 1 12 6"
        />
      </svg>
    ))
);
UserCircleDashedIconFilltone.displayName = "UserCircleDashedIconFilltone";
export { UserCircleDashedIconFilltone };
