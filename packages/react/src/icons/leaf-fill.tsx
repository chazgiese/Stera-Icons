import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LeafIconFill = memo(
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
          d="M4.622 17.072q.28.361.612.694.396.393.83.717c-.154.209-.326.45-.501.715-.471.713-.906 1.493-1.114 2.118a1 1 0 1 1-1.896-.632c.29-.873.837-1.825 1.342-2.588.246-.372.498-.725.727-1.024"
        />
        <path
          fill="currentColor"
          d="M21 3c0 4.05-.377 6.902-1.209 9.178-.84 2.302-2.119 3.936-3.77 5.588a7.63 7.63 0 0 1-9.956.717c.262-.353.476-.611.584-.72v.002l4.142-4.143a1 1 0 0 0-1.414-1.414l-4.142 4.143c-.158.158-.374.41-.613.721A7.627 7.627 0 0 1 5.235 6.98c1.317-1.316 2.696-2.606 4.952-3.532C12.42 2.531 15.433 2 20 2h1z"
        />
      </svg>
    ))
);
LeafIconFill.displayName = "LeafIconFill";
export { LeafIconFill };
