import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BatteryFullIconFill = memo(
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
          d="M15 5.25c.921 0 1.65 0 2.24.04.595.04 1.103.125 1.577.321a4.75 4.75 0 0 1 2.572 2.572c.195.47.279.976.32 1.567h.791c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.791c-.041.591-.125 1.096-.32 1.567a4.75 4.75 0 0 1-2.572 2.572c-.474.196-.982.28-1.578.321-.589.04-1.318.04-2.239.04H7c-.921 0-1.65 0-2.24-.04-.595-.04-1.103-.125-1.577-.321A4.75 4.75 0 0 1 .61 15.817c-.196-.474-.28-.982-.321-1.578C.25 13.65.25 12.921.25 12s0-1.65.04-2.24c.04-.595.125-1.103.321-1.577A4.75 4.75 0 0 1 3.183 5.61c.474-.196.982-.28 1.578-.321.589-.04 1.318-.04 2.239-.04zM5.6 8c-.264 0-.522-.001-.739.017a2 2 0 0 0-.77.2 2 2 0 0 0-.873.875 2 2 0 0 0-.201.77c-.018.216-.017.474-.017.738v2.8c0 .264-.001.522.017.739.018.228.063.498.2.77a2 2 0 0 0 .875.873c.271.138.54.183.77.201.216.018.474.017.738.017h10.8c.264 0 .522.001.739-.017.228-.018.498-.063.77-.2a2 2 0 0 0 .873-.875c.138-.271.183-.54.201-.77.018-.216.017-.474.017-.738v-2.8c0-.264.001-.522-.017-.739a2.2 2.2 0 0 0-.114-.566l-.087-.203-.077-.138a2 2 0 0 0-.797-.736 2 2 0 0 0-.77-.201C16.923 7.999 16.665 8 16.4 8z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BatteryFullIconFill.displayName = "BatteryFullIconFill";
export { BatteryFullIconFill };
