import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotIconBold = memo(
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
          d="M9.5 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M14.5 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a1.5 1.5 0 0 1 1 2.615V6h1.2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.03.36.037.777.04 1.252h.504a1.5 1.5 0 0 1 0 3H20v.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391q-.122.009-.252.015V21l-.005.102A1 1 0 0 1 15 22H9a1 1 0 0 1-1-1v-1.03q-.13-.005-.252-.014c-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C3.999 15.702 4 15.024 4 14.2V14h-.5a1.5 1.5 0 0 1 0-3h.504c.003-.476.01-.891.04-1.252.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C8.298 5.999 8.976 6 9.8 6H11V4.615A1.5 1.5 0 0 1 12 2M9.8 8c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C6 10.361 6 10.942 6 11.8v2.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C8.361 18 8.942 18 9.8 18h4.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 0 0 .873-.875c.08-.156.145-.38.18-.82.038-.45.038-1.031.038-1.888v-2.4c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C15.639 8 15.058 8 14.2 8z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RobotIconBold.displayName = "RobotIconBold";
export { RobotIconBold };
