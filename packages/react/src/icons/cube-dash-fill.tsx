import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubeDashIconFill = memo(
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
          d="M4.765 4.876a1 1 0 1 1 .97 1.748L5.06 7 12 10.856l2.327-1.292a1 1 0 0 1 .97 1.748L13 12.588V20.3l.765-.424a1 1 0 1 1 .97 1.748l-1.278.711q-.222.123-.457.204v.03h-.084a3 3 0 0 1-2.373-.234l-1.278-.71-.002-.002-.08-.044-4.2-2.334q-.105-.058-.205-.115-.006-.002-.013-.006l-1.222-.678A3 3 0 0 1 2 15.824v-6l.001-.307L2 9.5V8.177c0-.887.392-1.719 1.052-2.282l.005-.007.002.001q.222-.189.484-.334zM21 13.5a1 1 0 0 1 1 1v1.324a3 3 0 0 1-1.543 2.622l-1.222.678a1 1 0 0 1-.97-1.748l1.22-.678c.318-.177.515-.511.515-.874V14.5a1 1 0 0 1 1-1M17.876 5.265a1 1 0 0 1 1.36-.389l1.221.68A3 3 0 0 1 22 8.176V9.5a1 1 0 0 1-2 0v-.8l-1.327.737a1 1 0 0 1-.97-1.748L18.94 7l-.675-.376a1 1 0 0 1-.389-1.359M10.543 1.665a3 3 0 0 1 2.914 0l1.278.711a1 1 0 0 1-.97 1.748l-1.28-.71a1 1 0 0 0-.97 0l-1.28.71a1 1 0 0 1-.97-1.748z"
        />
      </svg>
    ))
);
CubeDashIconFill.displayName = "CubeDashIconFill";
export { CubeDashIconFill };
