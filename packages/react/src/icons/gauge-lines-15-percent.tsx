import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines15PercentIcon = memo(
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
          d="M12 2.714c5.937 0 10.75 4.813 10.75 10.75 0 2.937-1.18 5.599-3.089 7.538a.749.749 0 0 1-.733.27q-.01-.004-.02-.006a.74.74 0 0 1-.367-.2l-.018-.02-2.1-2.1a.75.75 0 1 1 1.06-1.061l1.566 1.565a9.2 9.2 0 0 0 2.168-5.236H19a.75.75 0 0 1 0-1.5h2.217a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.572a.75.75 0 0 1-1.061-1.06l1.57-1.572a9.2 9.2 0 0 0-5.231-2.167V6.47a.75.75 0 0 1-1.5 0V4.246a9.2 9.2 0 0 0-5.241 2.168l1.57 1.571a.75.75 0 0 1-1.06 1.06l-1.572-1.57a9.2 9.2 0 0 0-2.202 5.989 9.2 9.2 0 0 0 2.2 5.986l1.567-1.565a.75.75 0 1 1 1.06 1.06l-2.101 2.1-.017.02a.75.75 0 0 1-.361.199l-.027.008a.75.75 0 0 1-.733-.27 10.72 10.72 0 0 1-3.088-7.538c0-5.937 4.813-10.75 10.75-10.75"
        />
        <path
          fill="currentColor"
          d="M12 11.714a1.75 1.75 0 1 1 0 3.5l-.058-.002c-.494-.038-2.28-.294-3.896-.532a645 645 0 0 1-2.896-.435q-.127-.019-.195-.03l-.063-.009h-.004l-.134-.033a.75.75 0 0 1 .138-1.451l.063-.01.195-.03a524 524 0 0 1 2.896-.434c1.616-.238 3.403-.494 3.896-.532z"
        />
      </svg>
    ))
);
GaugeLines15PercentIcon.displayName = "GaugeLines15PercentIcon";
export { GaugeLines15PercentIcon };
