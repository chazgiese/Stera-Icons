import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskAltIconLinetone = memo(
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
          d="M12 1.75c.52 0 1.01.185 1.35.513.337.328.51.773.4 1.237q-.1.424-.19.85a36.8 36.8 0 0 0-.805 7.216 37 37 0 0 0 7.483 3.173c.457.137.756.51.871.966.115.458.03.975-.23 1.425s-.665.782-1.119.911c-.453.128-.925.056-1.272-.27q-.318-.3-.64-.59a37 37 0 0 0-5.843-4.303A36.8 36.8 0 0 0 5.52 17.77c-.347.328-.818.4-1.271.272-.454-.13-.86-.462-1.12-.912s-.345-.968-.23-1.426c.115-.456.415-.828.871-.965q.419-.125.831-.26a36.8 36.8 0 0 0 6.642-2.906A36.8 36.8 0 0 0 10.25 3.5c-.11-.464.063-.91.4-1.237.339-.328.83-.513 1.35-.513"
        />
        <path
          fill="currentColor"
          d="M4.244 5.967c.453-.129.926-.055 1.273.272q.317.3.64.59a36.8 36.8 0 0 0 5.847 4.305 37 37 0 0 0 6.49-4.895c.347-.327.82-.4 1.273-.271.453.13.858.462 1.118.912s.345.967.23 1.424-.414.83-.87.967q-.42.126-.832.26a37 37 0 0 0-6.657 2.914 37 37 0 0 0 .994 8.055c.11.464-.063.91-.401 1.237-.34.328-.83.513-1.349.513-.52 0-1.01-.185-1.349-.513s-.51-.773-.401-1.237q.1-.424.19-.85a37 37 0 0 0 .804-7.21 36.8 36.8 0 0 0-7.477-3.17c-.457-.136-.757-.509-.872-.965-.115-.458-.029-.975.23-1.425.261-.45.666-.784 1.12-.913"
          opacity={0.32}
        />
      </svg>
    ))
);
AstriskAltIconLinetone.displayName = "AstriskAltIconLinetone";
export { AstriskAltIconLinetone };
