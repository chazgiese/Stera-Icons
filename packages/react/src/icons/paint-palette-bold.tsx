import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PaintPaletteIconBold = memo(
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
          d="M12 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M7.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M11.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.467 3.138c3.399-.335 6.212.336 8.208 1.427.995.544 1.806 1.203 2.378 1.912.563.698.947 1.513.947 2.35 0 2.275-1.556 3.452-2.816 4.172-.32.182-.64.347-.924.493-.294.151-.544.281-.762.409-.491.287-.553.424-.55.414-.069.207-.052.307-.036.367.025.093.082.206.236.438.291.443.852 1.183.852 2.378 0 1.517-1.277 2.451-2.605 2.927-1.397.5-3.27.68-5.353.496-2.18-.193-4.639-1.117-6.57-2.57C2.546 16.9 1 14.807 1 12.243c0-2.4.89-4.548 2.704-6.165 1.793-1.597 4.409-2.61 7.763-2.94m7.249 3.182c-1.613-.882-4.018-1.491-7.053-1.192-3.08.304-5.246 1.212-6.628 2.444C3.675 8.784 3 10.374 3 12.242c0 1.704 1.03 3.274 2.674 4.511 1.638 1.233 3.744 2.017 5.545 2.176 1.897.168 3.46-.013 4.502-.387 1.11-.398 1.279-.854 1.279-1.044 0-.51-.19-.772-.523-1.277-.158-.24-.383-.59-.498-1.026-.125-.47-.108-.97.073-1.513.254-.763.946-1.22 1.434-1.507.274-.16.575-.315.858-.46.291-.15.573-.295.847-.452C20.306 10.626 21 9.967 21 8.827c0-.229-.116-.613-.504-1.094-.379-.47-.971-.971-1.78-1.413"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PaintPaletteIconBold.displayName = "PaintPaletteIconBold";
export { PaintPaletteIconBold };
