import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NotebookIconBold = memo(
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
          d="M14 12a1 1 0 1 1 0 2h-2.5a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 2c.684 0 1.257-.001 1.724.037.478.04.933.125 1.365.345a3.5 3.5 0 0 1 1.53 1.53c.22.43.305.886.344 1.364C21 5.743 21 6.316 21 7v10c0 .684.001 1.257-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.886.305-1.364.344C17.257 22 16.684 22 16 22H8c-.684 0-1.257.001-1.724-.037-.478-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.305-.886-.344-1.364C3 18.257 3 17.684 3 17V7c0-.684-.001-1.257.037-1.724.04-.478.125-.933.345-1.365a3.5 3.5 0 0 1 1.53-1.53c.43-.22.886-.305 1.364-.344C6.743 2 7.316 2 8 2zM8.5 20H16c.716 0 1.194 0 1.56-.03.355-.03.518-.08.62-.133.283-.144.513-.374.657-.656.052-.103.104-.266.133-.62.03-.367.03-.844.03-1.561V7c0-.717 0-1.194-.03-1.56-.03-.355-.08-.518-.133-.62a1.5 1.5 0 0 0-.656-.657c-.103-.052-.266-.104-.62-.133C17.194 4 16.717 4 16 4H8.5zM6.44 4.03c-.355.03-.518.08-.62.133a1.5 1.5 0 0 0-.657.656c-.052.103-.104.266-.133.62C5 5.806 5 6.283 5 7v10c0 .716 0 1.194.03 1.56.03.355.08.518.133.62.144.283.374.513.656.657.103.052.266.104.62.133l.061.003V4.026z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NotebookIconBold.displayName = "NotebookIconBold";
export { NotebookIconBold };
