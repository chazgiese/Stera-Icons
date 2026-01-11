import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines66PercentIcon = memo(
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
          d="M12 2.714c5.937 0 10.75 4.813 10.75 10.75 0 2.937-1.18 5.599-3.089 7.538a.749.749 0 0 1-.733.27q-.01-.004-.02-.006a.74.74 0 0 1-.367-.2l-.018-.02-2.1-2.1a.75.75 0 1 1 1.06-1.061l1.566 1.565a9.2 9.2 0 0 0 2.168-5.236H19a.75.75 0 0 1 0-1.5h2.217a9.246 9.246 0 0 0-8.462-8.467V6.47a.75.75 0 0 1-1.5 0V4.246a9.2 9.2 0 0 0-5.241 2.168l1.57 1.571a.75.75 0 0 1-1.06 1.06l-1.572-1.57a9.2 9.2 0 0 0-2.169 5.239H5a.75.75 0 0 1 0 1.5H2.783c.16 1.99.947 3.8 2.167 5.236l1.567-1.565a.75.75 0 1 1 1.06 1.06l-2.101 2.1-.017.02a.75.75 0 0 1-.361.199l-.027.008a.75.75 0 0 1-.733-.27 10.72 10.72 0 0 1-3.088-7.538c0-5.937 4.813-10.75 10.75-10.75"
        />
        <path
          fill="currentColor"
          d="M16.622 7.839a.75.75 0 0 1 .932 1.12l-.003.003-.037.052-.119.159a573 573 0 0 1-1.74 2.354c-.974 1.312-2.056 2.756-2.379 3.132l-.039.042a1.75 1.75 0 0 1-2.474-2.474l.042-.04c.376-.323 1.82-1.405 3.132-2.38.664-.493 1.307-.967 1.783-1.318l.571-.42.16-.119.051-.038.003-.002z"
        />
      </svg>
    ))
);
GaugeLines66PercentIcon.displayName = "GaugeLines66PercentIcon";
export { GaugeLines66PercentIcon };
