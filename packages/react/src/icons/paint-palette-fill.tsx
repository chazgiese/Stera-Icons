import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PaintPaletteIconFill = memo(
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
          d="M11.467 3.142c3.399-.335 6.212.336 8.208 1.427.995.544 1.806 1.202 2.378 1.912.563.698.947 1.513.947 2.35 0 2.275-1.556 3.452-2.816 4.172-.32.182-.64.347-.924.493-.293.151-.544.28-.762.409-.488.286-.552.422-.55.414-.069.206-.052.307-.036.367.025.093.082.206.236.438.291.443.852 1.183.852 2.378 0 1.517-1.277 2.451-2.605 2.927-1.397.5-3.27.68-5.353.496-2.18-.193-4.639-1.117-6.57-2.57C2.546 16.905 1 14.81 1 12.246c0-2.4.89-4.547 2.704-6.164 1.793-1.597 4.409-2.61 7.763-2.94M12 13.502a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4.5-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m8.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PaintPaletteIconFill.displayName = "PaintPaletteIconFill";
export { PaintPaletteIconFill };
