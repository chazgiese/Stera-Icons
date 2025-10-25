import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubicGraphIconLinetone = memo(
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
          d="M21 4a1 1 0 1 1 0 2c-4.039 0-6.396 3.004-8.702 6.546-1.105 1.697-2.218 3.547-3.458 4.934C7.58 18.888 6.035 20 4 20q-.045 0-.089-.005l.004.001.034.002.012.001h-.01l-.101-.001h-.341l-.347.001-.114.001h-.044a1 1 0 0 1-.008-2h.044l.115-.001.699-.001.12.001h.034c1.212-.003 2.255-.64 3.34-1.854 1.108-1.237 2.1-2.888 3.274-4.69C12.873 7.995 15.766 4 21 4"
        />
      </svg>
    ))
);
CubicGraphIconLinetone.displayName = "CubicGraphIconLinetone";
export { CubicGraphIconLinetone };
