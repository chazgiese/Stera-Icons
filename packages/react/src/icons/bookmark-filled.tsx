import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookmarkIconFilled = memo(
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
          d="M12 1c1.857 0 3.351-.002 4.523.155 1.2.162 2.21.507 3.012 1.31.803.802 1.148 1.812 1.31 3.013C21.002 6.648 21 8.143 21 10v6.992c0 1.37.003 2.513-.12 3.355-.118.822-.407 1.743-1.333 2.17s-1.814.048-2.517-.396c-.719-.454-1.585-1.197-2.628-2.088l-.454-.387c-.64-.546-1.05-.894-1.387-1.117-.315-.206-.462-.232-.561-.232s-.246.026-.56.232c-.338.223-.749.571-1.388 1.117l-.454.387c-1.043.89-1.91 1.634-2.628 2.088-.703.444-1.59.823-2.517.396s-1.215-1.348-1.334-2.17C2.997 19.505 3 18.363 3 16.992V10c0-1.857-.002-3.351.155-4.522.162-1.2.507-2.21 1.31-3.013.802-.803 1.812-1.148 3.013-1.31C8.648.998 10.143 1 12 1"
        />
      </svg>
    ))
);
BookmarkIconFilled.displayName = "BookmarkIconFilled";
export { BookmarkIconFilled };
