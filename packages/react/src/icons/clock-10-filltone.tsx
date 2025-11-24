import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock10IconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4a1 1 0 0 0-1 1v4.268L9.035 9.134a1 1 0 0 0-1 1.732l3.464 2q.05.03.103.051.022.01.046.018l.045.016.041.012.06.014.016.004q.042.009.083.013l.021.001.077.004L12 13l.02-.001a1 1 0 0 0 .218-.03l.029-.007a1 1 0 0 0 .235-.1q.017-.008.034-.02.025-.016.049-.033l.034-.026a1 1 0 0 0 .073-.063l.037-.04.027-.028A1 1 0 0 0 13 12V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.032.243 1 1 0 0 1-.213.41l-.026.028q-.019.021-.039.04l-.03.028a1 1 0 0 1-.124.094l-.034.02a1 1 0 0 1-.325.12l-.04.006a1 1 0 0 1-.118.01L12 13l-.008-.001-.077-.004h-.02l-.082-.014q-.009 0-.018-.004a1 1 0 0 1-.155-.045l-.037-.015a1 1 0 0 1-.103-.05l-3.464-2a1 1 0 0 1 1-1.733L11 10.268V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock10IconFilltone.displayName = "Clock10IconFilltone";
export { Clock10IconFilltone };
