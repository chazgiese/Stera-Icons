import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanCameraIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.016 6c.252.002.527.017.792.1.28.09.54.234.762.424.277.237.468.555.642.828l.192.3.083.128c.016.024.019.026.015.022a.2.2 0 0 0 .122.072h.019l.146.001c.337 0 .644-.004.918.048 1.169.22 2.047 1.163 2.25 2.321.046.273.043.579.043.935V14c0 .51.001.949-.027 1.31-.03.37-.094.745-.27 1.106a2.84 2.84 0 0 1-1.217 1.263c-.36.191-.734.26-1.1.292-.351.03-.78.029-1.266.029H8.88c-.487 0-.914 0-1.267-.03-.365-.03-.739-.1-1.1-.291a2.84 2.84 0 0 1-1.215-1.263c-.177-.361-.241-.735-.27-1.106C4.998 14.949 5 14.51 5 14v-2.821c0-.356-.003-.662.044-.935.202-1.158 1.08-2.1 2.249-2.321.274-.052.582-.048.918-.048l.146-.001h.019a.2.2 0 0 0 .122-.072c-.004.004-.001.002.015-.022l.083-.128.192-.3c.174-.273.365-.59.642-.828.222-.19.482-.335.762-.423.265-.084.54-.099.792-.101zM12 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanCameraIconFilltone.displayName = "ScanCameraIconFilltone";
export { ScanCameraIconFilltone };
