import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertTriangleIcon = memo(
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
          d="M10.469 2.624a3.75 3.75 0 0 1 3.062 0c.637.285 1.127.821 1.602 1.5.478.682 1.01 1.615 1.685 2.797l3.73 6.525c.666 1.166 1.192 2.086 1.534 2.835.34.746.55 1.434.476 2.122a3.75 3.75 0 0 1-1.528 2.634c-.56.406-1.263.564-2.08.639-.819.075-1.879.074-3.222.074H8.271c-1.343 0-2.403 0-3.222-.075-.816-.074-1.52-.232-2.08-.638a3.75 3.75 0 0 1-1.528-2.634c-.074-.688.137-1.376.477-2.122.341-.75.867-1.669 1.534-2.835l3.73-6.525c.675-1.182 1.206-2.115 1.684-2.797.475-.679.966-1.215 1.603-1.5m2.45 1.369a2.25 2.25 0 0 0-1.838 0c-.257.115-.556.375-.987.991-.428.613-.92 1.473-1.61 2.68l-3.73 6.526c-.68 1.192-1.165 2.042-1.471 2.713-.308.675-.38 1.06-.35 1.339.068.632.401 1.207.916 1.58.227.164.598.292 1.336.36.735.067 1.713.068 3.086.068h7.457c1.373 0 2.351-.001 3.086-.069.738-.067 1.109-.195 1.336-.359.515-.373.849-.948.917-1.58.03-.279-.043-.664-.35-1.339-.307-.672-.791-1.521-1.472-2.713l-3.729-6.525c-.69-1.208-1.182-2.068-1.611-2.68-.431-.617-.73-.877-.986-.992"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
AlertTriangleIcon.displayName = "AlertTriangleIcon";
export { AlertTriangleIcon };
