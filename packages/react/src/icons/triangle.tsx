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
          d="M10.469 2.624a3.75 3.75 0 0 1 3.062 0c.637.285 1.127.822 1.603 1.5.477.683 1.009 1.615 1.684 2.797l3.73 6.526c.666 1.166 1.192 2.085 1.534 2.835.34.745.55 1.433.476 2.122a3.75 3.75 0 0 1-1.528 2.633c-.56.406-1.263.564-2.08.639-.819.075-1.879.074-3.222.074H8.271c-1.343 0-2.403.001-3.222-.074-.816-.075-1.52-.233-2.08-.639a3.75 3.75 0 0 1-1.528-2.633c-.074-.688.137-1.377.477-2.122.341-.75.868-1.67 1.534-2.835l3.73-6.526c.675-1.182 1.206-2.114 1.684-2.797.475-.678.966-1.215 1.603-1.5m2.45 1.37a2.25 2.25 0 0 0-1.838 0c-.257.115-.556.375-.986.99-.43.613-.922 1.474-1.612 2.681l-3.728 6.526c-.681 1.191-1.166 2.04-1.472 2.713-.308.674-.38 1.06-.35 1.338.068.633.401 1.207.916 1.58.227.165.598.292 1.336.36.735.067 1.714.068 3.086.068h7.457c1.373 0 2.351 0 3.086-.068.738-.068 1.11-.195 1.336-.36.515-.373.849-.947.917-1.58.03-.278-.043-.663-.35-1.338-.307-.672-.791-1.521-1.472-2.713l-3.729-6.526c-.69-1.207-1.182-2.068-1.611-2.68-.431-.616-.73-.877-.986-.992"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TriangleIcon.displayName = "TriangleIcon";
export { TriangleIcon };
