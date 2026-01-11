import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubeDashIconBold = memo(
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
          d="M12 17.875a1 1 0 0 1 1 1V20.3l.765-.424a1 1 0 1 1 .97 1.748l-1.278.711a3 3 0 0 1-2.914 0l-1.278-.71a1 1 0 0 1 .97-1.749L11 20.3v-1.425a1 1 0 0 1 1-1M3 13.5a1 1 0 0 1 1 1v1.324c0 .363.197.697.515.874l1.22.678a1 1 0 0 1-.97 1.748l-1.222-.678A3 3 0 0 1 2 15.824V14.5a1 1 0 0 1 1-1M21 13.5a1 1 0 0 1 1 1v1.324a3 3 0 0 1-1.543 2.622l-1.222.678a1 1 0 0 1-.97-1.748l1.22-.678c.318-.177.515-.511.515-.874V14.5a1 1 0 0 1 1-1M14.327 9.564a1 1 0 0 1 .97 1.748L13 12.588v2.537a1 1 0 0 1-2 0v-2.537l-2.298-1.276a1 1 0 0 1 .97-1.748L12 10.856zM4.765 4.876a1 1 0 1 1 .97 1.748L5.06 7l1.239.689a1 1 0 0 1-.97 1.748L4 8.7v.8a1 1 0 0 1-2 0V8.177a3 3 0 0 1 1.543-2.622zM17.876 5.265a1 1 0 0 1 1.36-.389l1.221.68A3 3 0 0 1 22 8.176V9.5a1 1 0 0 1-2 0v-.8l-1.327.737a1 1 0 0 1-.97-1.748L18.94 7l-.675-.376a1 1 0 0 1-.389-1.359M10.543 1.665a3 3 0 0 1 2.914 0l1.278.711a1 1 0 0 1-.97 1.748l-1.28-.71a1 1 0 0 0-.97 0l-1.28.71a1 1 0 0 1-.97-1.748z"
        />
      </svg>
    ))
);
CubeDashIconBold.displayName = "CubeDashIconBold";
export { CubeDashIconBold };
