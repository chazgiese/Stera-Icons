import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleDownIconLinetone = memo(
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
          d="M15.729 2c1.338 0 2.41-.001 3.245.075.79.073 1.514.227 2.114.628a1 1 0 0 0-1.084 1.677c-.172-.124-.487-.246-1.213-.313-.72-.066-1.685-.067-3.062-.067H8.27c-1.377 0-2.342.001-3.063.067-.726.067-1.04.19-1.212.314a1 1 0 1 0-1.173-1.62c.616-.447 1.373-.61 2.202-.686C5.86 2 6.933 2 8.271 2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M2.823 2.76a1 1 0 1 1 1.173 1.62 2 2 0 0 0-.815 1.404c-.022.21.027.546.33 1.208.3.66.778 1.497 1.461 2.693l3.729 6.525c.693 1.212 1.179 2.061 1.6 2.662.423.605.689.82.882.907.52.232 1.114.232 1.634 0 .194-.087.46-.302.883-.907.42-.6.907-1.45 1.6-2.662l3.728-6.525c.684-1.196 1.16-2.034 1.461-2.693.302-.663.353-.997.33-1.208a2 2 0 0 0-.815-1.404 1 1 0 0 1 1.173-1.62 4 4 0 0 1 1.63 2.81c.082.756-.152 1.495-.498 2.252-.347.762-.88 1.694-1.545 2.856l-3.728 6.524c-.673 1.178-1.212 2.123-1.697 2.817-.483.689-1.005 1.273-1.706 1.586a4 4 0 0 1-3.266 0c-.7-.314-1.223-.897-1.705-1.586-.486-.694-1.024-1.639-1.697-2.817l-3.73-6.524C2.571 9.516 2.04 8.584 1.691 7.822c-.345-.757-.58-1.496-.498-2.252a4 4 0 0 1 1.63-2.81"
        />
      </svg>
    ))
);
TriangleDownIconLinetone.displayName = "TriangleDownIconLinetone";
export { TriangleDownIconLinetone };
