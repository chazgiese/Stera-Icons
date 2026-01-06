import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleDownIconDuotone = memo(
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
          d="M15.729 2.25c1.343 0 2.402-.001 3.222.074.784.072 1.461.222 2.01.593a.751.751 0 0 0-.81 1.26c-.227-.164-.598-.29-1.337-.359-.735-.067-1.713-.068-3.085-.068H8.27c-1.372 0-2.35 0-3.085.068-.739.068-1.11.195-1.336.36a.751.751 0 0 0-.88-1.215c.56-.406 1.263-.564 2.079-.639.82-.075 1.88-.074 3.222-.074z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M2.97 2.963a.751.751 0 0 1 .88 1.215 2.25 2.25 0 0 0-.918 1.58c-.03.279.044.663.351 1.338.306.671.79 1.521 1.472 2.713l3.73 6.525c.69 1.208 1.182 2.07 1.61 2.682.432.616.73.876.987.99a2.25 2.25 0 0 0 1.837 0c.257-.114.555-.375.986-.99.429-.613.921-1.474 1.611-2.682l3.729-6.525c.68-1.192 1.165-2.042 1.472-2.713.307-.675.38-1.06.35-1.338a2.25 2.25 0 0 0-.916-1.58.75.75 0 1 1 .88-1.215 3.75 3.75 0 0 1 1.527 2.633c.075.688-.136 1.377-.476 2.123-.342.749-.868 1.669-1.534 2.835l-3.729 6.524c-.675 1.182-1.208 2.115-1.685 2.797-.475.679-.966 1.216-1.602 1.501a3.75 3.75 0 0 1-3.063 0c-.637-.285-1.128-.822-1.603-1.5-.478-.683-1.01-1.616-1.685-2.798l-3.728-6.524C2.787 9.388 2.26 8.468 1.919 7.719c-.34-.746-.552-1.435-.478-2.123A3.75 3.75 0 0 1 2.97 2.963"
        />
      </svg>
    ))
);
TriangleDownIconDuotone.displayName = "TriangleDownIconDuotone";
export { TriangleDownIconDuotone };
