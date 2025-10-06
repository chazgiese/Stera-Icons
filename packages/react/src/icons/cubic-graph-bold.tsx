import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubicGraphBold = memo(
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
          d="M12.005 19.958a1 1 0 0 1 1 1v.047a1 1 0 1 1-2 0v-.047a1 1 0 0 1 1-1M21 4a1 1 0 1 1 0 2c-3.661 0-5.94 2.468-8.053 5.568a.99.99 0 0 1-.146 1.086 1 1 0 0 1-.796.398l-.032-.002c-1 1.552-2.014 3.179-3.133 4.43C7.58 18.888 6.035 20 4 20q-.045 0-.089-.005l.004.001.034.002.012.001h-.01l-.101-.001h-.341l-.347.001-.114.001h-.044a1 1 0 0 1-.008-2h.044l.115-.001.699-.001.12.001h.034c1.212-.003 2.255-.64 3.34-1.854 1.108-1.237 2.1-2.888 3.274-4.69.317-.488.648-.985.995-1.481a1 1 0 0 1-.612-.922v-.094a1 1 0 0 1 1.813-.58C14.778 5.992 17.305 4 21 4M12.005 16.958a1 1 0 0 1 1 1v.094a1 1 0 0 1-2 0v-.094a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M12.005 13.958a1 1 0 0 1 1 1v.094a1 1 0 0 1-2 0v-.094a1 1 0 0 1 1-1M3.047 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.047 11a1 1 0 1 1 0 2h-.094a1 1 0 1 1 0-2zM9.047 11a1 1 0 1 1 0 2h-.094a1 1 0 1 1 0-2zM15.047 11a1 1 0 1 1 0 2h-.094a1 1 0 0 1 0-2zM18.047 11a1 1 0 1 1 0 2h-.094a1 1 0 0 1 0-2zM21 11a1 1 0 1 1 0 2h-.047a1 1 0 0 1 0-2zM12.005 4.958a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1M12.005 2.005a1 1 0 0 1 1 1v.047a1 1 0 1 1-2 0v-.047a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CubicGraphBold.displayName = "CubicGraphBold";
export { CubicGraphBold };
