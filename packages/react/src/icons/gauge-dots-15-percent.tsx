import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots15PercentIcon = memo(
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
          d="M7.404 15.347a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.597 15.347a1.25 1.25 0 1 1-.001 2.5 1.25 1.25 0 0 1 0-2.5M12 10.25a1.75 1.75 0 1 1 0 3.5l-.058-.002c-.494-.038-2.28-.294-3.896-.532a645 645 0 0 1-2.896-.435l-.195-.029-.063-.01h-.004l-.134-.033a.75.75 0 0 1 .133-1.45l.005-.001.063-.01q.068-.01.195-.03a706 706 0 0 1 2.896-.434c1.616-.238 3.403-.494 3.896-.532zM18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.404 6.154a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.5M16.597 6.153a1.25 1.25 0 1 1-.002 2.502 1.25 1.25 0 0 1 .002-2.502M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
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
GaugeDots15PercentIcon.displayName = "GaugeDots15PercentIcon";
export { GaugeDots15PercentIcon };
