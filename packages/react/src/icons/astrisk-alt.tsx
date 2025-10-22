import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskAltIcon = memo(
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
          d="M12 1.75c.52 0 1.01.185 1.35.513.338.328.51.773.4 1.237q-.1.424-.19.85a37 37 0 0 0-.783 6.311 37 37 0 0 0 5.717-4.422c.347-.327.819-.4 1.272-.271s.858.46 1.118.91c.26.451.345.968.23 1.426-.115.456-.413.828-.87.966q-.418.125-.83.26a37 37 0 0 0-5.852 2.475 37 37 0 0 0 6.676 2.734c.457.137.756.51.871.966.115.457.03.974-.23 1.424s-.665.783-1.118.912c-.453.128-.926.055-1.273-.271a37.156 37.156 0 0 0-5.71-4.419 37 37 0 0 0 .972 7.149c.11.464-.063.91-.401 1.237-.34.328-.83.513-1.349.513-.52 0-1.01-.185-1.349-.513s-.51-.773-.401-1.237q.1-.424.19-.85.663-3.146.78-6.294a37 37 0 0 0-5.699 4.414c-.346.327-.818.4-1.271.272-.453-.13-.859-.462-1.12-.912-.26-.45-.344-.968-.23-1.426.116-.457.415-.828.871-.965q.419-.125.832-.26a37 37 0 0 0 5.846-2.474A37 37 0 0 0 3.767 9.27c-.457-.137-.757-.509-.872-.965-.115-.458-.029-.975.231-1.425s.665-.784 1.118-.913.926-.055 1.273.272q.317.3.64.59a37 37 0 0 0 5.065 3.826A37 37 0 0 0 10.25 3.5c-.11-.464.063-.91.4-1.237.34-.328.83-.513 1.35-.513"
        />
      </svg>
    ))
);
AstriskAltIcon.displayName = "AstriskAltIcon";
export { AstriskAltIcon };
