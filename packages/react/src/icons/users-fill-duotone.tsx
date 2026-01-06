import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UsersIconFillDuotone = memo(
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
          d="M9.2 3c3.093 0 5.6 2.418 5.6 5.4 0 1.697-.812 3.21-2.082 4.2 2.051.768 3.602 2.26 4.365 4.37.22.61.438 1.16.237 1.963-.084.336-.271.663-.458.917a2.8 2.8 0 0 1-.748.72c-.74.46-1.547.43-2.434.43H4.72c-.887 0-1.694.03-2.434-.43a2.8 2.8 0 0 1-.748-.72c-.187-.254-.375-.581-.459-.918-.2-.802.017-1.351.237-1.961.763-2.111 2.314-3.603 4.365-4.372C4.41 11.61 3.6 10.096 3.6 8.4 3.6 5.419 6.107 3 9.2 3"
        />
        <path
          fill="currentColor"
          d="M14.8 3c3.093 0 5.6 2.418 5.6 5.4 0 1.697-.812 3.21-2.081 4.2 2.05.768 3.602 2.26 4.365 4.37.22.61.437 1.16.237 1.963-.084.336-.272.663-.459.917a2.8 2.8 0 0 1-.748.72c-.74.46-1.547.43-2.434.43h-1.579q.175-.194.302-.368c.246-.334.538-.82.678-1.383l.05-.227c.213-1.115-.126-1.94-.326-2.495a8.46 8.46 0 0 0-3.433-4.315A6.55 6.55 0 0 0 16.2 8.4c0-2.132-1.026-4.032-2.627-5.27a6 6 0 0 1 1.227-.13"
          opacity={0.4}
        />
      </svg>
    ))
);
UsersIconFillDuotone.displayName = "UsersIconFillDuotone";
export { UsersIconFillDuotone };
