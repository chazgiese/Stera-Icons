import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Bottle = memo(
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
          d="M12.547 1.25a2 2 0 0 1 1.999 1.923l.179 4.64c.01.267.105.524.272.733l1.15 1.437a2.75 2.75 0 0 1 .603 1.718V20A2.75 2.75 0 0 1 14 22.75h-4A2.75 2.75 0 0 1 7.25 20v-8.299c0-.624.213-1.23.603-1.718l1.15-1.437c.167-.209.262-.466.272-.733l.18-4.64a2 2 0 0 1 1.998-1.923zm-1.094 1.5a.5.5 0 0 0-.5.48l-.179 4.641a2.75 2.75 0 0 1-.6 1.611l-1.15 1.439a1.25 1.25 0 0 0-.274.78V20c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-8.299a1.25 1.25 0 0 0-.273-.78l-1.15-1.439a2.75 2.75 0 0 1-.601-1.61l-.18-4.642a.5.5 0 0 0-.5-.48z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Bottle.displayName = "Bottle";
export { Bottle };
