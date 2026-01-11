import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubeDashIconFillDuotone = memo(
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
          d="M18.236 4.893a1 1 0 0 0 .028 1.731L18.94 7l-1.238.688a1 1 0 0 0 .97 1.749L20 8.699V9.5a1 1 0 0 0 1.5.865v3.27a1 1 0 0 0-1.5.865v1.323c0 .363-.197.698-.515.874l-1.22.679a1 1 0 0 0-.029 1.73l-2.988 1.66a1 1 0 0 0-1.483-.89L13 20.3v-1.425a1 1 0 0 0-2 0V20.3l-.765-.424a1 1 0 0 0-1.484.89l-2.988-1.66a1 1 0 0 0-.027-1.73l-1.221-.679A1 1 0 0 1 4 15.823V14.5a1 1 0 0 0-1.5-.865v-3.27A1 1 0 0 0 4 9.5v-.8l1.327.737a1 1 0 0 0 .97-1.749L5.06 7l.676-.376a1 1 0 0 0 .028-1.731l2.988-1.66a1 1 0 0 0 1.484.892l1.28-.71a1 1 0 0 1 .97 0l1.28.709a1 1 0 0 0 1.483-.892zm-2.55 5.06a1 1 0 0 0-1.359-.39L12 10.855 9.673 9.564a1 1 0 0 0-.97 1.749L11 12.588v2.537a1 1 0 0 0 2 0v-2.537l2.298-1.276a1 1 0 0 0 .389-1.36"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 17.875a1 1 0 0 1 1 1V20.3l.765-.424a1 1 0 1 1 .97 1.748l-1.278.711a3 3 0 0 1-2.914 0l-1.278-.71a1 1 0 0 1 .97-1.749L11 20.3v-1.425a1 1 0 0 1 1-1M3 13.5a1 1 0 0 1 1 1v1.324c0 .363.197.697.515.874l1.22.678a1 1 0 0 1-.97 1.748l-1.222-.678A3 3 0 0 1 2 15.824V14.5a1 1 0 0 1 1-1M21 13.5a1 1 0 0 1 1 1v1.324a3 3 0 0 1-1.543 2.622l-1.222.678a1 1 0 0 1-.97-1.748l1.22-.678c.318-.177.515-.511.515-.874V14.5a1 1 0 0 1 1-1M14.327 9.564a1 1 0 0 1 .97 1.748L13 12.588v2.537a1 1 0 0 1-2 0v-2.537l-2.298-1.276a1 1 0 0 1 .97-1.748L12 10.856zM4.765 4.876a1 1 0 1 1 .97 1.748L5.06 7l1.239.689a1 1 0 0 1-.97 1.748L4 8.7v.8a1 1 0 0 1-2 0V8.177a3 3 0 0 1 1.543-2.622zM17.876 5.265a1 1 0 0 1 1.36-.389l1.221.68A3 3 0 0 1 22 8.176V9.5a1 1 0 0 1-2 0v-.8l-1.327.737a1 1 0 0 1-.97-1.748L18.94 7l-.675-.376a1 1 0 0 1-.389-1.359M10.543 1.665a3 3 0 0 1 2.914 0l1.278.711a1 1 0 0 1-.97 1.748l-1.28-.71a1 1 0 0 0-.97 0l-1.28.71a1 1 0 0 1-.97-1.748z"
        />
      </svg>
    ))
);
CubeDashIconFillDuotone.displayName = "CubeDashIconFillDuotone";
export { CubeDashIconFillDuotone };
