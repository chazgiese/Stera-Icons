import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleIcon = memo(
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
          d="M10.468 2.624a3.75 3.75 0 0 1 3.063 0c.636.285 1.127.822 1.602 1.5.478.683 1.01 1.615 1.685 2.797l3.73 6.526c.666 1.166 1.192 2.085 1.533 2.835.34.745.551 1.433.477 2.122a3.75 3.75 0 0 1-1.528 2.633c-.56.406-1.264.564-2.08.639-.82.075-1.88.074-3.222.074H8.27c-1.343 0-2.403.001-3.223-.074-.816-.075-1.519-.233-2.079-.639a3.75 3.75 0 0 1-1.528-2.633c-.075-.688.136-1.377.476-2.122.342-.75.868-1.67 1.534-2.835l3.73-6.526c.675-1.182 1.207-2.114 1.684-2.797.475-.678.966-1.215 1.603-1.5m2.45 1.37a2.25 2.25 0 0 0-1.838 0c-.257.115-.555.375-.986.99-.429.613-.921 1.474-1.611 2.681l-3.729 6.526c-.68 1.191-1.165 2.04-1.472 2.713-.307.674-.38 1.06-.35 1.338.068.633.402 1.207.917 1.58.227.165.598.292 1.336.36.735.067 1.713.068 3.086.068h7.457c1.373 0 2.35 0 3.086-.068.738-.068 1.109-.195 1.336-.36.515-.373.848-.947.917-1.58.03-.278-.043-.663-.35-1.338-.307-.672-.792-1.521-1.473-2.713l-3.728-6.526c-.69-1.207-1.183-2.068-1.611-2.68-.432-.616-.73-.877-.987-.992"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TriangleIcon.displayName = "TriangleIcon";
export { TriangleIcon };
