import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineBottleLabelIconBoldDuotone = memo(
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
          d="M12.5 1a2.25 2.25 0 0 1 2.25 2.25v4.244c-.002-.011-.006.01.045.068.063.07.174.152.318.213A3.5 3.5 0 0 1 17.25 11v9a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3v-9c0-1.451.883-2.694 2.137-3.225a.9.9 0 0 0 .318-.213c.05-.058.047-.079.045-.068V3.25A2.25 2.25 0 0 1 11.5 1zm-1 2a.25.25 0 0 0-.25.25V7.5c0 1.153-.931 1.841-1.584 2.117-.54.229-.916.763-.916 1.383v9a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-9c0-.62-.376-1.154-.916-1.383-.652-.276-1.584-.964-1.584-2.117V3.25A.25.25 0 0 0 12.5 3z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.25 19.5H8.751v-2h6.499zM15.25 14H8.751v-2h6.499z"
        />
      </svg>
    ))
);
WineBottleLabelIconBoldDuotone.displayName = "WineBottleLabelIconBoldDuotone";
export { WineBottleLabelIconBoldDuotone };
