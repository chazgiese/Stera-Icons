import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots0PercentIcon = memo(
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
          d="M10.586 10.586a2 2 0 1 1 2.828 2.828l-.057.053c-.385.33-1.84 1.42-3.145 2.39-.664.493-1.306.968-1.782 1.319l-.574.422-.158.116-.042.031-.01.008-.003.002a1 1 0 0 1-1.399-1.398l.003-.003.008-.01.031-.043.116-.158a857 857 0 0 1 1.742-2.355c.97-1.306 2.059-2.76 2.39-3.145q.025-.03.052-.057M16.597 15.347a1.25 1.25 0 1 1-.001 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.404 6.154a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.5M16.597 6.154a1.25 1.25 0 1 1-.001 2.501 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots0PercentIcon.displayName = "GaugeDots0PercentIcon";
export { GaugeDots0PercentIcon };
