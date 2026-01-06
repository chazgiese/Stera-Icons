import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NotebookIconBoldDuotone = memo(
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
          d="M16 2c.684 0 1.257-.001 1.724.037.478.04.933.125 1.365.345a3.5 3.5 0 0 1 1.53 1.53c.22.43.305.886.344 1.364C21 5.743 21 6.316 21 7v10c0 .684.001 1.257-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.886.305-1.364.344C17.257 22 16.684 22 16 22H8.5v-2H16c.716 0 1.194 0 1.56-.03.355-.03.518-.08.62-.133.283-.144.513-.374.657-.656.052-.103.104-.266.133-.62.03-.367.03-.844.03-1.561V7c0-.717 0-1.194-.03-1.56-.03-.355-.08-.518-.133-.62a1.5 1.5 0 0 0-.656-.657c-.103-.052-.266-.104-.62-.133C17.194 4 16.717 4 16 4H8.5V2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.5 22h-1c-.853 0-1.517.012-2.082-.171a3.5 3.5 0 0 1-2.247-2.247C2.987 19.017 3 18.352 3 17.5v-11c0-.853-.013-1.517.17-2.082A3.5 3.5 0 0 1 5.419 2.17C5.983 1.987 6.648 2 7.5 2h1zM6.5 4.01c-.242.01-.365.03-.464.062a1.5 1.5 0 0 0-.963.963C5.012 5.224 5 5.49 5 6.5v11c0 1.008.012 1.276.073 1.464.148.456.507.814.963.963.1.032.222.05.464.06z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M14 12a1 1 0 0 1 0 2h-2.5a1 1 0 0 1 0-2zM16 8a1 1 0 0 1 0 2h-4.5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
NotebookIconBoldDuotone.displayName = "NotebookIconBoldDuotone";
export { NotebookIconBoldDuotone };
