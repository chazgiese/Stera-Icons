import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskAltIconFilltone = memo(
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
          <path d="M10.45 12.006q.4.212.794.434a37 37 0 0 1-.024.916 37 37 0 0 0-5.699 4.414c-.347.328-.818.4-1.271.272-.454-.13-.86-.462-1.12-.912s-.345-.968-.23-1.426c.115-.456.415-.828.871-.965q.419-.125.831-.26a37 37 0 0 0 5.848-2.473M13.562 12.006a37 37 0 0 0 6.676 2.733c.457.137.756.51.871.966.115.458.03.975-.23 1.425s-.665.782-1.119.911c-.453.128-.925.056-1.272-.27q-.318-.3-.64-.59a37 37 0 0 0-5.07-3.831 36 36 0 0 1-.022-.905q.4-.224.806-.44M12 1.75c.52 0 1.01.185 1.35.513.337.328.51.773.4 1.237q-.1.424-.19.85a37 37 0 0 0-.784 6.311q-.384.241-.772.473a37 37 0 0 1-.783-.479A37 37 0 0 0 10.25 3.5c-.11-.464.063-.91.4-1.237.339-.328.83-.513 1.35-.513" />
        </g>
        <path
          fill="currentColor"
          d="M4.244 5.967c.453-.129.926-.055 1.273.272q.317.3.64.59a36.8 36.8 0 0 0 5.847 4.305 37 37 0 0 0 6.49-4.895c.347-.327.82-.4 1.273-.271.453.13.858.462 1.118.912s.345.967.23 1.424-.414.83-.87.967q-.42.126-.832.26a37 37 0 0 0-6.657 2.914 37 37 0 0 0 .994 8.055c.11.464-.063.91-.401 1.237-.34.328-.83.513-1.349.513-.52 0-1.01-.185-1.349-.513s-.51-.773-.401-1.237q.1-.424.19-.85a37 37 0 0 0 .804-7.21 36.8 36.8 0 0 0-7.477-3.17c-.457-.136-.757-.509-.872-.965-.115-.458-.029-.975.23-1.425.261-.45.666-.784 1.12-.913"
        />
      </svg>
    ))
);
AstriskAltIconFilltone.displayName = "AstriskAltIconFilltone";
export { AstriskAltIconFilltone };
