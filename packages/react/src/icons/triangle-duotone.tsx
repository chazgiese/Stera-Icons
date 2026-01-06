import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleIconDuotone = memo(
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
          d="M10.469 2.624a3.75 3.75 0 0 1 3.063 0c.636.285 1.127.823 1.602 1.501.477.683 1.01 1.614 1.685 2.796l3.729 6.526c.666 1.166 1.192 2.086 1.534 2.835.34.745.55 1.434.476 2.122a3.75 3.75 0 0 1-1.527 2.633.751.751 0 0 1-.88-1.214c.515-.374.848-.948.916-1.58.03-.28-.043-.665-.35-1.34-.306-.671-.791-1.52-1.472-2.712l-3.729-6.525c-.69-1.207-1.182-2.069-1.61-2.681-.432-.616-.73-.877-.987-.992a2.25 2.25 0 0 0-1.837 0c-.257.115-.555.376-.987.992-.428.612-.92 1.473-1.61 2.681l-3.73 6.525c-.681 1.191-1.166 2.04-1.472 2.713-.308.674-.38 1.06-.35 1.338.068.633.401 1.207.916 1.58a.75.75 0 0 1-.88 1.215 3.75 3.75 0 0 1-1.528-2.633c-.074-.688.138-1.377.478-2.122.341-.75.868-1.67 1.534-2.835L7.181 6.92C7.857 5.74 8.39 4.808 8.866 4.125c.475-.678.966-1.216 1.603-1.5"
        />
        <path
          fill="currentColor"
          d="M20.151 19.822a.75.75 0 0 0 .81 1.26c-.549.371-1.226.522-2.01.594-.82.075-1.88.074-3.222.074H8.27c-1.342 0-2.402 0-3.222-.074-.816-.075-1.52-.233-2.08-.639a.75.75 0 0 0 .94-1.167l-.06-.048c.228.165.598.292 1.337.36.735.067 1.713.068 3.085.068h7.458c1.372 0 2.35 0 3.085-.068.739-.068 1.11-.195 1.337-.36"
          opacity={0.4}
        />
      </svg>
    ))
);
TriangleIconDuotone.displayName = "TriangleIconDuotone";
export { TriangleIconDuotone };
