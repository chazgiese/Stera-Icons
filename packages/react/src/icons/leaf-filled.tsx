import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LeafIconFilled = memo(
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
          d="M4.622 17.072q.28.361.611.694.396.393.831.717c-.154.209-.327.45-.502.715-.471.713-.905 1.493-1.114 2.118a1 1 0 1 1-1.896-.632c.29-.873.838-1.825 1.342-2.588.246-.372.498-.725.728-1.024"
        />
        <path
          fill="currentColor"
          d="M21 3c0 4.05-.378 6.902-1.21 9.178-.84 2.302-2.118 3.936-3.77 5.588a7.63 7.63 0 0 1-9.956.717c.262-.353.476-.611.584-.72l.001.002 4.142-4.143a1 1 0 0 0-1.414-1.414l-4.143 4.143c-.158.158-.373.41-.612.721A7.627 7.627 0 0 1 5.234 6.98c1.317-1.316 2.697-2.606 4.952-3.532C12.42 2.531 15.433 2 20 2h1z"
        />
      </svg>
    ))
);
LeafIconFilled.displayName = "LeafIconFilled";
export { LeafIconFilled };
