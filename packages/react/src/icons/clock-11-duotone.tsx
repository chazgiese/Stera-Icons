import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock11IconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5.25a.75.75 0 0 1 .75.75v6l-.003.043v.014a.7.7 0 0 1-.07.258q-.011.024-.026.048-.019.037-.042.07-.021.03-.046.057a.7.7 0 0 1-.137.125l-.02.013q-.015.011-.031.021a1 1 0 0 1-.076.038l-.02.008q-.043.016-.087.026-.044.013-.092.021l-.012.002a1 1 0 0 1-.088.006q-.023 0-.044-.003h-.015a1 1 0 0 1-.112-.018q-.036-.01-.071-.023-.036-.011-.071-.026-.028-.014-.053-.03-.038-.02-.072-.044-.025-.017-.046-.038a.8.8 0 0 1-.132-.142l-.013-.02-.02-.031-2-3.464a.75.75 0 0 1 1.298-.75l.601 1.04V6a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
Clock11IconDuotone.displayName = "Clock11IconDuotone";
export { Clock11IconDuotone };
