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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12.005 12.878q.39.23.773.472a37 37 0 0 0 .972 7.15c.11.464-.064.91-.401 1.237-.34.328-.83.513-1.35.513-.519 0-1.009-.185-1.348-.513-.338-.328-.51-.773-.401-1.237q.1-.425.19-.85.664-3.146.78-6.294.39-.244.785-.478M4.244 5.967c.453-.129.926-.055 1.273.272q.317.3.64.59a37 37 0 0 0 5.065 3.827q.016.459.022.917-.394.222-.794.433A37 37 0 0 0 3.767 9.27c-.457-.136-.757-.509-.873-.965-.114-.458-.028-.975.232-1.425s.665-.784 1.118-.913M18.494 6.24c.347-.328.82-.4 1.273-.272.453.13.858.462 1.118.912s.345.966.23 1.424c-.115.456-.414.83-.87.966q-.42.126-.832.261a37 37 0 0 0-5.85 2.475q-.408-.215-.808-.44.004-.452.021-.904a37 37 0 0 0 5.718-4.423" />
        </g>
        <path
          fill="currentColor"
          d="M12 1.75c.52 0 1.01.185 1.35.513.337.328.51.773.4 1.237q-.1.424-.19.85a36.8 36.8 0 0 0-.805 7.216 37 37 0 0 0 7.483 3.173c.457.137.756.51.871.966.115.458.03.975-.23 1.425s-.665.782-1.119.911c-.453.128-.925.056-1.272-.27q-.318-.3-.64-.59a37 37 0 0 0-5.843-4.303A36.8 36.8 0 0 0 5.52 17.77c-.347.328-.818.4-1.271.272-.454-.13-.86-.462-1.12-.912s-.345-.968-.23-1.426c.115-.456.415-.828.871-.965q.419-.125.831-.26a36.8 36.8 0 0 0 6.642-2.906A36.8 36.8 0 0 0 10.25 3.5c-.11-.464.063-.91.4-1.237.339-.328.83-.513 1.35-.513"
        />
      </svg>
    ))
);
AstriskAltIconLinetone.displayName = "AstriskAltIconLinetone";
export { AstriskAltIconLinetone };
