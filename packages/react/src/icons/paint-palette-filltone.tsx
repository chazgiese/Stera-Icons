import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PaintPaletteIconFilltone = memo(
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
          d="M11.467 3.138c3.399-.335 6.212.336 8.208 1.427.995.544 1.806 1.203 2.378 1.912.563.698.947 1.514.947 2.35 0 2.276-1.556 3.453-2.816 4.173-.32.182-.64.346-.924.493-.294.15-.544.28-.762.408-.491.288-.553.424-.55.414-.069.207-.052.308-.036.367.025.094.082.206.236.439.291.442.852 1.182.852 2.378 0 1.517-1.277 2.45-2.605 2.927-1.397.5-3.27.68-5.353.496-2.18-.193-4.639-1.118-6.57-2.57C2.546 16.901 1 14.806 1 12.241c0-2.399.89-4.546 2.704-6.163 1.793-1.598 4.409-2.61 7.763-2.94"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M7.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M11.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
PaintPaletteIconFilltone.displayName = "PaintPaletteIconFilltone";
export { PaintPaletteIconFilltone };
