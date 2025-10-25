import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubicGraphIconFilltone = memo(
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
          <path d="M12.005 19.959a1 1 0 0 1 1 1v.047a1 1 0 0 1-2 0v-.047a1 1 0 0 1 1-1M12.005 16.959a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1M12.005 13.959a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1M12.005 10.959c.284 0 .54.12.722.31a.996.996 0 0 1 .078 1.38.997.997 0 0 1-1.537.078.996.996 0 0 1 .088-1.529c.175-.149.401-.239.649-.239M3.047 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.047 11a1 1 0 1 1 0 2h-.094a1 1 0 1 1 0-2zM9.047 11a1 1 0 1 1 0 2h-.094a1 1 0 1 1 0-2zM15.047 11a1 1 0 1 1 0 2h-.094a1 1 0 1 1 0-2zM18.047 11a1 1 0 1 1 0 2h-.094a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-.047a1 1 0 1 1 0-2zM12.005 7.959a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1M12.005 4.959a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1M12.005 2.006a1 1 0 0 1 1 1v.047a1 1 0 1 1-2 0v-.047a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 3.5a1.5 1.5 0 0 1 0 3c-3.74 0-5.964 2.755-8.283 6.318-1.088 1.671-2.23 3.57-3.504 4.995C7.91 19.269 6.24 20.5 4 20.5l-.074-.002H3.51l-.346.001-.114.001h-.044a1.5 1.5 0 0 1-.012-3h.044l.115-.001.701-.001.125.001h.034c1.005-.004 1.923-.523 2.964-1.686 1.074-1.201 2.036-2.802 3.226-4.631C12.44 7.745 15.467 3.5 21 3.5M3.8 20.486l.04.004q-.06-.006-.118-.016c.043.008.073.011.079.012m-.398-.11.02.007-.036-.017zm-.829-.912.004.007-.004-.012zm.167-1.277q0 .002-.002.005l.008-.012z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CubicGraphIconFilltone.displayName = "CubicGraphIconFilltone";
export { CubicGraphIconFilltone };
