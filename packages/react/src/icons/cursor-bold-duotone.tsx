import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorIconBoldDuotone = memo(
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
          d="M5.044 4.293a.15.15 0 0 0-.04.068.13.13 0 0 0 .006.078l5.237 15.712c.017.052.038.068.049.075a.16.16 0 0 0 .089.022c.04 0 .071-.013.088-.025.01-.007.026-.023.04-.066l1.385-6.535a3 3 0 0 1 .814-1.499l.08-.08 1.415 1.413-.08.081a1 1 0 0 0-.272.5l-1.398 6.598-.019.075c-.592 2.013-3.425 2.064-4.089.073L3.112 5.072a2.13 2.13 0 0 1 .518-2.193z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3.63 2.88a2.13 2.13 0 0 1 2.193-.518L21.535 7.6c1.99.664 1.94 3.496-.073 4.089-1.381.406-2.478.59-3.518.756-1.037.166-2 .31-3.193.632a.9.9 0 0 0-.404.24l-.14.14-1.414-1.414.14-.14a2.9 2.9 0 0 1 1.298-.756c1.312-.353 2.377-.513 3.398-.676 1.02-.163 2.014-.332 3.268-.701.053-.016.07-.036.078-.046a.16.16 0 0 0 .025-.09q-.002-.06-.023-.088c-.007-.01-.022-.032-.075-.05L5.19 4.26a.13.13 0 0 0-.079-.006.15.15 0 0 0-.067.04z"
        />
      </svg>
    ))
);
CursorIconBoldDuotone.displayName = "CursorIconBoldDuotone";
export { CursorIconBoldDuotone };
