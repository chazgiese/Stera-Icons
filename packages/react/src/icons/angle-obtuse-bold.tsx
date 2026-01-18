import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleObtuseIconBold = memo(
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
          d="M21.334 13.922a1 1 0 0 1 1.224.707l.003.012a1 1 0 0 1-1.932.515l-.002-.01a1 1 0 0 1 .707-1.224M19.89 11.129a1 1 0 0 1 1.367.364l.006.01a1 1 0 0 1-1.732 1l-.005-.007a1 1 0 0 1 .365-1.367M17.774 8.805a1 1 0 0 1 1.414-.001l.008.008a1 1 0 1 1-1.422 1.407 1 1 0 0 1 0-1.414M15.13 7.103a1 1 0 0 1 1.367-.366l.01.006a1 1 0 1 1-1.003 1.73q-.004-.001-.008-.004a1 1 0 0 1-.365-1.366M3.925 6.504A1.001 1.001 0 0 1 4.86 8.27l-.008.004a1 1 0 1 1-.937-1.766zM12.136 6.146a1 1 0 0 1 1.223-.708l.012.003a1 1 0 0 1-.518 1.932l-.01-.002a1 1 0 0 1-.707-1.225M6.874 5.379a1 1 0 1 1 .48 1.941l-.01.002a1 1 0 0 1-.48-1.941zM10.006 5a1 1 0 0 1-.001 2h-.01a1 1 0 0 1 0-2zM1.337 8.307a1 1 0 0 1 1.412.08L10.448 17H22a1 1 0 0 1 0 2H10c-.284 0-.556-.122-.746-.334L1.258 9.718a1 1 0 0 1 .08-1.41"
        />
      </svg>
    ))
);
AngleObtuseIconBold.displayName = "AngleObtuseIconBold";
export { AngleObtuseIconBold };
