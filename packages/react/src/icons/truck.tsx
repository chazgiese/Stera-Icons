import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TruckIcon = memo(
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
          d="M13 3.25A2.75 2.75 0 0 1 15.75 6v.25h2.183a2 2 0 0 1 1.505.683l2.631 3.007c.439.502.681 1.146.681 1.812v3.998a2 2 0 0 1-2 2h-.51a3.25 3.25 0 0 1-6.48 0h-3.52a3.25 3.25 0 0 1-6.481-.013A2.75 2.75 0 0 1 1.25 15V6A2.75 2.75 0 0 1 4 3.25zm-6 12.5a1.75 1.75 0 1 0 0 3.502 1.75 1.75 0 0 0 0-3.502m10 0a1.746 1.746 0 0 0-1.75 1.75A1.75 1.75 0 1 0 17 15.75m-13-11c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h.002l.018-.04q.174-.402.446-.74l.031-.04q.058-.068.118-.134.024-.027.05-.053.06-.064.127-.125l.048-.044q.066-.06.137-.116l.05-.038a3.2 3.2 0 0 1 .58-.357q.049-.022.1-.043.06-.027.123-.052a3 3 0 0 1 .522-.152 3 3 0 0 1 .261-.042q.06-.007.12-.013a3.3 3.3 0 0 1 .534 0q.06.006.119.013a3 3 0 0 1 .416.078 3 3 0 0 1 .236.069q.066.022.131.047.062.024.123.052.051.02.1.043a3.254 3.254 0 0 1 .58.356q.025.02.05.039.07.056.137.116l.048.044q.066.06.128.125l.049.053q.06.066.118.135l.031.039q.271.338.447.74l.018.04h4.003q.105-.252.249-.48V6c0-.69-.56-1.25-1.25-1.25zm11.75 9.75a3.248 3.248 0 0 1 4.248 1.75h.752a.5.5 0 0 0 .5-.5v-3.998c0-.303-.11-.595-.31-.823L18.31 7.92a.5.5 0 0 0-.376-.171H15.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TruckIcon.displayName = "TruckIcon";
export { TruckIcon };
