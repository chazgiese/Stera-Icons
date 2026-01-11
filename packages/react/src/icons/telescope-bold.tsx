import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TelescopeIconBold = memo(
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
          d="M18.063 2.357a2.25 2.25 0 0 1 2.756 1.591l1.422 5.313a2.25 2.25 0 0 1-1.59 2.756l-1.69.453a3 3 0 0 1-2.434-.4l-1.596.297q.068.307.07.633c0 .809-.322 1.54-.842 2.08l2.736 5.473a1 1 0 0 1-1.79.894L12.383 16h-.764l-2.723 5.447a1 1 0 0 1-1.79-.894l2.736-5.473a3 3 0 0 1-.805-1.61l-4.02.754a2.25 2.25 0 0 1-2.587-1.63l-.436-1.627A2.25 2.25 0 0 1 3.42 8.263l11.046-3.89a3 3 0 0 1 1.907-1.562zM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7.917-1.85a.25.25 0 0 0-.158.3l.437 1.627a.25.25 0 0 0 .287.18l1.743-.326-.635-2.371zM7.65 8.892l.716 2.67 1.13-.212a2.997 2.997 0 0 1 4.24-.794l1.53-.287-.994-3.708zM18.58 4.289l-1.69.453a1 1 0 0 0-.707 1.225l1.034 3.862.001.002a1 1 0 0 0 1.225.707l1.69-.453a.25.25 0 0 0 .177-.306l-1.424-5.313a.25.25 0 0 0-.306-.177"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TelescopeIconBold.displayName = "TelescopeIconBold";
export { TelescopeIconBold };
