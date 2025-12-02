import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanCameraIconFilled = memo(
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
          d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.246 6.258c.146.009.28.028.411.07.216.067.416.179.588.326.207.178.355.418.546.717l.192.3c.086.134.108.168.13.195a.69.69 0 0 0 .453.254c.031.004.069.005.223.005.36 0 .608-.002.825.04.954.18 1.682.952 1.85 1.915.038.22.036.472.036.849v2.821c0 .517 0 .934-.026 1.27-.027.343-.084.645-.221.926a2.34 2.34 0 0 1-1.001 1.041c-.276.147-.575.207-.907.236-.326.027-.73.027-1.225.027H8.88c-.496 0-.898 0-1.225-.027-.332-.029-.63-.089-.907-.236a2.34 2.34 0 0 1-1-1.04c-.138-.282-.195-.584-.222-.926-.026-.337-.026-.754-.026-1.271v-2.821c0-.377-.002-.63.036-.849.168-.963.896-1.736 1.85-1.916.217-.04.466-.039.825-.039.154 0 .192-.001.223-.005a.69.69 0 0 0 .453-.254 2 2 0 0 0 .13-.194l.192-.3c.191-.3.339-.54.546-.718.172-.147.372-.259.588-.327.261-.083.541-.077.884-.077h1.546zM12 10.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanCameraIconFilled.displayName = "ScanCameraIconFilled";
export { ScanCameraIconFilled };
