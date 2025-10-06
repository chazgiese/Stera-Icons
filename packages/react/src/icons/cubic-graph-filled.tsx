import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubicGraphFilled = memo(
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
          d="M12.005 19.958a1 1 0 0 1 1 1v.047a1 1 0 1 1-2 0v-.047a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 3.5a1.5 1.5 0 0 1 0 3c-3.74 0-5.964 2.755-8.283 6.318q-.363.56-.735 1.141l.023-.001a1 1 0 0 1 1 1v.094a1 1 0 0 1-1.947.32c-.588.874-1.2 1.719-1.845 2.44C7.91 19.27 6.24 20.5 4 20.5l-.074-.002H3.51l-.346.001-.114.001h-.044a1.5 1.5 0 0 1-.012-3h.044l.115-.001.701-.001.125.001h.034c1.005-.004 1.923-.523 2.964-1.686.7-.783 1.35-1.738 2.048-2.813h-.072a1 1 0 1 1 0-2h.094a1 1 0 0 1 .903.573l.253-.391c.32-.493.659-1.001 1.017-1.512a1 1 0 0 1-.215-.618v-.094a1 1 0 0 1 1.43-.901C14.447 5.609 17.102 3.5 21 3.5M3.8 20.486l.04.004q-.06-.006-.118-.016c.043.008.073.011.079.012m-.398-.11.02.007-.036-.017zm-.829-.912.004.007-.004-.012zm.167-1.277q0 .002-.002.005l.008-.012z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12.005 16.958a1 1 0 0 1 1 1v.094a1 1 0 0 1-2 0v-.094a1 1 0 0 1 1-1M3.047 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.047 11a1 1 0 1 1 0 2h-.094a1 1 0 1 1 0-2zM15.047 11a1 1 0 1 1 0 2h-.094a1 1 0 0 1 0-2zM18.047 11a1 1 0 1 1 0 2h-.094a1 1 0 0 1 0-2zM21 11a1 1 0 1 1 0 2h-.047a1 1 0 0 1 0-2zM12.005 4.958a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1M12.005 2.005a1 1 0 0 1 1 1v.047a1 1 0 1 1-2 0v-.047a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CubicGraphFilled.displayName = "CubicGraphFilled";
export { CubicGraphFilled };
