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
          d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.018 6.25c.244.002.484.016.714.089.249.078.478.207.675.376.242.207.412.486.595.771l.192.301c.089.138.103.158.114.172.078.096.182.15.288.163.013.002.034.003.193.003.348 0 .626-.003.871.043 1.061.2 1.865 1.058 2.05 2.12.043.245.04.524.04.89V14c0 .513.001.941-.026 1.29-.028.357-.09.695-.247 1.016a2.6 2.6 0 0 1-1.108 1.152c-.318.169-.654.234-1.003.264-.34.029-.755.028-1.246.028H8.88c-.491 0-.907 0-1.246-.028-.35-.03-.685-.095-1.003-.264a2.6 2.6 0 0 1-1.109-1.152c-.157-.321-.218-.66-.246-1.016-.027-.349-.026-.777-.026-1.29v-2.821c0-.367-.003-.646.04-.892.185-1.06.989-1.919 2.05-2.119.245-.046.523-.043.87-.043.16 0 .181-.001.194-.003a.44.44 0 0 0 .288-.163c.011-.014.025-.034.114-.172l.192-.3c.183-.286.353-.565.595-.772.197-.17.426-.298.675-.376.23-.073.47-.087.714-.089zM12 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanCameraIconFilled.displayName = "ScanCameraIconFilled";
export { ScanCameraIconFilled };
