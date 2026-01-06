import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PieIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M19.062 18.257a2.25 2.25 0 0 1-2.12 1.493H7.057c-.951 0-1.8-.598-2.12-1.493l-1.292-3.622a3.26 3.26 0 0 0 1.601.028l1.105 3.089a.75.75 0 0 0 .706.498h9.885c.317 0 .6-.2.707-.498l1.104-3.089a3.26 3.26 0 0 0 1.602-.028zM9.47 7.72a.75.75 0 1 1 1.06 1.06l-1 1a.75.75 0 1 1-1.06-1.06zM13.47 7.72a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.25c4.97 0 9.099 2.808 10.493 6.785.207.593.267 1.356-.121 2.031-.574.999-1.64 1.684-2.873 1.684a3.28 3.28 0 0 1-2.5-1.162 3.28 3.28 0 0 1-2.5 1.162 3.28 3.28 0 0 1-2.5-1.162 3.28 3.28 0 0 1-2.5 1.162A3.28 3.28 0 0 1 7 13.588a3.28 3.28 0 0 1-2.5 1.162c-1.232 0-2.298-.685-2.872-1.684-.388-.675-.328-1.438-.12-2.03C2.9 7.057 7.03 4.25 11.998 4.25m0 1.5c-4.423 0-7.923 2.486-9.078 5.781-.117.335-.095.61.006.787.326.567.914.932 1.571.932.836 0 1.564-.593 1.773-1.432l.04-.12a.75.75 0 0 1 1.415.12c.209.84.937 1.432 1.772 1.432s1.564-.593 1.773-1.432l.04-.12a.75.75 0 0 1 1.415.12c.209.84.938 1.432 1.772 1.432s1.564-.593 1.773-1.432l.04-.12a.75.75 0 0 1 1.415.12c.209.84.938 1.432 1.772 1.432.658 0 1.246-.365 1.572-.932.101-.176.123-.452.006-.787-1.155-3.295-4.655-5.781-9.078-5.781"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PieIconDuotone.displayName = "PieIconDuotone";
export { PieIconDuotone };
