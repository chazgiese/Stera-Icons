import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock2IconBold = memo(
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
          d="M12 5a1 1 0 0 1 1 1v4.268l1.964-1.134a1 1 0 0 1 1 1.732l-3.464 2-.017.008-.035.018q-.023.013-.048.024-.03.014-.064.024l-.026.01-.057.016-.045.011-.027.005q-.037.008-.074.012l-.025.001-.074.004L12 13l-.02-.001q-.035 0-.068-.004-.024-.002-.047-.006a1 1 0 0 1-.098-.018l-.04-.01-.066-.021-.02-.007-.069-.03-.026-.013a1 1 0 0 1-.09-.052q-.017-.01-.033-.023l-.054-.04-.01-.01a1 1 0 0 1-.125-.122l-.02-.026-.033-.045-.029-.044-.018-.028-.009-.017-.018-.035q-.013-.023-.024-.048-.014-.03-.024-.064l-.008-.02-.006-.018-.012-.045-.011-.045-.005-.027a1 1 0 0 1-.017-.155V6a1 1 0 0 1 1-1"
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
Clock2IconBold.displayName = "Clock2IconBold";
export { Clock2IconBold };
