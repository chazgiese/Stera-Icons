import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotHumanoidIconDuotone = memo(
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
          d="M12 4.25A6.75 6.75 0 0 1 18.75 11v2a6.75 6.75 0 0 1-13.5 0v-2A6.75 6.75 0 0 1 12 4.25m0 1.5A5.25 5.25 0 0 0 6.75 11v2a5.25 5.25 0 1 0 10.5 0v-2c0-2.9-2.35-5.25-5.25-5.25"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.228 20.818a.75.75 0 0 1-.728.932h-5a.75.75 0 0 1-.728-.932l.42-1.68A6.7 6.7 0 0 0 12 19.75c1.002 0 1.952-.22 2.807-.612zM5 9.25q.24.002.462.063A6.8 6.8 0 0 0 5.25 11v1.73a2 2 0 0 1-.25.02 1.75 1.75 0 1 1 0-3.5M19 9.25a1.75 1.75 0 1 1 0 3.5q-.127-.002-.25-.02V11a6.8 6.8 0 0 0-.213-1.687A1.8 1.8 0 0 1 19 9.25M10 9.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75M14 9.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75M12 2.25a.75.75 0 0 1 .75.75v1.292a6.8 6.8 0 0 0-1.5 0V3a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
RobotHumanoidIconDuotone.displayName = "RobotHumanoidIconDuotone";
export { RobotHumanoidIconDuotone };
