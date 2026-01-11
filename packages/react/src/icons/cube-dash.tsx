import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubeDashIcon = memo(
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
          d="M12 18.125a.75.75 0 0 1 .75.75v1.85l1.136-.63a.75.75 0 0 1 .728 1.31l-1.278.71a2.75 2.75 0 0 1-2.672 0l-1.278-.71a.75.75 0 0 1 .728-1.31l1.136.63v-1.85a.75.75 0 0 1 .75-.75M3 13.75a.75.75 0 0 1 .75.75v1.323c0 .454.246.872.643 1.093l1.221.678a.75.75 0 0 1-.728 1.31l-1.222-.677a2.75 2.75 0 0 1-1.414-2.404V14.5a.75.75 0 0 1 .75-.75M21 13.75a.75.75 0 0 1 .75.75v1.323a2.75 2.75 0 0 1-1.414 2.404l-1.222.678a.75.75 0 1 1-.728-1.31l1.221-.68a1.25 1.25 0 0 0 .643-1.092V14.5a.75.75 0 0 1 .75-.75M14.448 9.782a.75.75 0 0 1 .729 1.31l-2.427 1.35v2.683a.75.75 0 0 1-1.5 0V12.44l-2.427-1.349a.75.75 0 0 1 .729-1.31L12 11.142zM4.886 5.094a.75.75 0 0 1 .728 1.31L4.543 7l1.634.907a.75.75 0 0 1-.729 1.31L3.75 8.273V9.5a.75.75 0 0 1-1.5 0V8.176c0-.998.541-1.919 1.414-2.404zM18.095 5.385a.75.75 0 0 1 1.02-.29l1.22.677a2.75 2.75 0 0 1 1.415 2.404V9.5a.75.75 0 0 1-1.5 0V8.273l-1.698.944a.75.75 0 1 1-.729-1.31L19.456 7l-1.07-.595a.75.75 0 0 1-.291-1.02M10.664 1.883a2.75 2.75 0 0 1 2.672 0l1.278.711a.75.75 0 0 1-.728 1.31l-1.279-.709a1.25 1.25 0 0 0-1.214 0l-1.279.71a.75.75 0 1 1-.728-1.31z"
        />
      </svg>
    ))
);
CubeDashIcon.displayName = "CubeDashIcon";
export { CubeDashIcon };
