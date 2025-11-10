import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock11IconBold = memo(
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
          d="M12 5a1 1 0 0 1 1 1v6l-.001.02-.004.067q-.002.024-.006.047a1 1 0 0 1-.087.294l-.012.025a1 1 0 0 1-.052.09q-.01.018-.023.033a1 1 0 0 1-.172.189l-.026.02-.045.033-.044.03q-.014.01-.028.018l-.017.008-.035.018q-.023.013-.048.024-.03.014-.064.024l-.026.01-.057.016a1 1 0 0 1-.098.02q-.018.004-.038.006l-.053.004q-.027.002-.056.003L12 13l-.02-.001q-.035 0-.068-.004-.024-.002-.047-.006a1 1 0 0 1-.098-.018l-.04-.01-.066-.021-.02-.007-.069-.03-.026-.013a1 1 0 0 1-.09-.052q-.017-.01-.033-.023l-.05-.037-.035-.03-.033-.03a1 1 0 0 1-.07-.075l-.02-.026q-.018-.023-.034-.045l-.032-.049q-.007-.011-.015-.023l-2-3.464a1 1 0 0 1 1.732-1l.134.232V6a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Clock11IconBold.displayName = "Clock11IconBold";
export { Clock11IconBold };
