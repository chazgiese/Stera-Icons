import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorIconLinetone = memo(
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
          d="M5.044 4.043a.15.15 0 0 0-.04.067.13.13 0 0 0 .006.078L10.247 19.9c.018.053.038.068.049.076a.16.16 0 0 0 .089.022c.04 0 .072-.013.089-.025.01-.007.025-.023.04-.067l1.385-6.534c.12-.568.403-1.088.813-1.499l.081-.081 1.414 1.414-.08.081a1 1 0 0 0-.271.5l-1.399 6.598-.018.075c-.592 2.013-3.425 2.064-4.09.073L3.113 4.821A2.13 2.13 0 0 1 3.63 2.63z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3.63 2.63a2.13 2.13 0 0 1 2.193-.518L21.535 7.35c1.99.664 1.94 3.497-.073 4.09-1.381.406-2.478.59-3.518.756-1.037.166-2 .31-3.193.632a.9.9 0 0 0-.404.24l-.14.14-1.414-1.414.14-.14a2.9 2.9 0 0 1 1.298-.757c1.312-.353 2.377-.512 3.398-.675 1.02-.163 2.014-.333 3.268-.702.053-.015.07-.035.078-.046A.16.16 0 0 0 21 9.385q-.002-.061-.023-.09c-.007-.01-.022-.032-.075-.049L5.19 4.01a.13.13 0 0 0-.079-.006.15.15 0 0 0-.067.04z"
        />
      </svg>
    ))
);
CursorIconLinetone.displayName = "CursorIconLinetone";
export { CursorIconLinetone };
