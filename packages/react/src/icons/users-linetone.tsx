import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UsersIconLinetone = memo(
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
          d="M15 2a6 6 0 0 1 3.77 10.666c2.197.854 3.859 2.511 4.676 4.857.236.678.469 1.289.254 2.18-.09.374-.29.738-.491 1.02-.2.281-.478.591-.802.8-.793.51-1.657.477-2.607.477H14v-2h5.8c1.146 0 1.33-.033 1.525-.16.032-.02.136-.11.253-.276a1.2 1.2 0 0 0 .178-.33.8.8 0 0 0 .017-.352c-.026-.15-.086-.328-.215-.7C20.646 15.565 18.334 14 15 14l-.252-.005a5.98 5.98 0 0 1-3.35-1.195l1.203-1.6a4 4 0 1 0 0-6.4l-1.203-1.6A5.98 5.98 0 0 1 15 2"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 2a6 6 0 0 1 3.77 10.666c2.197.854 3.859 2.511 4.676 4.857.236.678.469 1.289.254 2.18-.09.374-.29.738-.491 1.02-.2.281-.478.591-.802.8-.793.51-1.657.477-2.607.477H4.2c-.95 0-1.814.033-2.607-.477-.324-.209-.602-.519-.802-.8S.39 20.077.3 19.703c-.215-.891.018-1.502.254-2.18.817-2.345 2.479-4.002 4.675-4.857A6 6 0 0 1 9 2m0 12c-3.334 0-5.646 1.565-6.558 4.182-.13.372-.189.55-.215.7a.8.8 0 0 0 .017.352c.01.037.06.166.178.33.117.165.221.256.253.277.195.126.38.159 1.525.159h9.6c1.145 0 1.33-.033 1.525-.16.032-.02.136-.11.253-.276a1.2 1.2 0 0 0 .178-.33.8.8 0 0 0 .017-.352c-.026-.15-.086-.328-.215-.7C14.646 15.565 12.334 14 9 14M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UsersIconLinetone.displayName = "UsersIconLinetone";
export { UsersIconLinetone };
