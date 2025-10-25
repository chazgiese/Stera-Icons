import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CylinderStackIconFilltone = memo(
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
          <path d="M19.53 14.518A1 1 0 0 1 21 15.4V19c0 .803-.437 1.448-.965 1.916-.529.469-1.238.846-2.027 1.142-1.586.595-3.71.942-6.008.942s-4.422-.348-6.008-.942c-.79-.296-1.498-.673-2.027-1.142C3.437 20.448 3 19.803 3 19v-3.6a1 1 0 0 1 1.47-.882C6.102 15.386 8.828 16 12 16s5.898-.614 7.53-1.482M20 4a1 1 0 0 1 1 1v6.4a1 1 0 0 1-.53.883C18.453 13.357 15.37 14 12 14s-6.453-.643-8.47-1.717A1 1 0 0 1 3 11.4V5a1 1 0 0 1 2 0c0 .026.01.17.292.42.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c2.297 0 4.422.348 6.008.942.79.296 1.498.673 2.027 1.142C20.563 3.552 21 4.197 21 5s-.437 1.448-.965 1.916c-.529.469-1.238.846-2.027 1.142C16.422 8.652 14.298 9 12 9s-4.422-.348-6.008-.942c-.79-.296-1.498-.673-2.027-1.142C3.437 6.448 3 5.803 3 5s.437-1.448.965-1.916c.529-.469 1.238-.846 2.027-1.142C7.578 1.348 9.702 1 12 1m0 2c-2.121 0-3.997.325-5.306.815-.658.247-1.121.516-1.402.765C5.01 4.83 5 4.974 5 5s.01.17.292.42c.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765C15.996 3.325 14.12 3 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CylinderStackIconFilltone.displayName = "CylinderStackIconFilltone";
export { CylinderStackIconFilltone };
