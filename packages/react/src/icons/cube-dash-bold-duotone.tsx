import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubeDashIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 17.875a1 1 0 0 1 1 1V20.3l.765-.424a1 1 0 0 1 .97 1.748l-1.278.711a3 3 0 0 1-2.914 0l-1.278-.71a1 1 0 0 1 .97-1.749L11 20.3v-1.425a1 1 0 0 1 1-1M4.765 4.876a1 1 0 1 1 .97 1.748L5.06 7l1.239.689a1 1 0 0 1-.97 1.748L4 8.699V9.5a1 1 0 0 1-2 0V8.177a3 3 0 0 1 1.543-2.622zM17.876 5.265a1 1 0 0 1 1.36-.389l1.221.679A3 3 0 0 1 22 8.177V9.5a1 1 0 0 1-2 0v-.8l-1.327.737a1 1 0 0 1-.97-1.748L18.94 7l-.675-.376a1 1 0 0 1-.389-1.36" />
        </g>
        <path
          fill="currentColor"
          d="M3 13.5a1 1 0 0 1 1 1v1.323a1 1 0 0 0 .515.874l1.22.678a1 1 0 0 1-.97 1.748l-1.222-.677A3 3 0 0 1 2 15.823v-1.324a1 1 0 0 1 1-1M21 13.5a1 1 0 0 1 1 1v1.323c0 1.09-.59 2.093-1.543 2.623l-1.222.677a1 1 0 1 1-.97-1.748l1.22-.678a1 1 0 0 0 .515-.874v-1.324a1 1 0 0 1 1-1M14.327 9.564a1 1 0 0 1 .97 1.748L13 12.588v2.537a1 1 0 0 1-2 0v-2.537l-2.298-1.276a1 1 0 0 1 .97-1.748L12 10.856zM10.543 1.665a3 3 0 0 1 2.914 0l1.278.71a1 1 0 0 1-.97 1.748l-1.28-.71a1 1 0 0 0-.97 0l-1.28.71a1 1 0 1 1-.97-1.748z"
        />
      </svg>
    ))
);
CubeDashIconBoldDuotone.displayName = "CubeDashIconBoldDuotone";
export { CubeDashIconBoldDuotone };
