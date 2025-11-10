import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock10IconBold = memo(
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
          d="M12 5a1 1 0 0 1 1 1v6c0 .25-.093.477-.244.652l-.027.029-.037.039a1 1 0 0 1-.073.063l-.034.026-.049.034-.034.02a1 1 0 0 1-.235.099l-.029.008a1 1 0 0 1-.217.029L12 13l-.009-.001-.077-.004h-.021l-.083-.014q-.007 0-.016-.004l-.06-.014q-.02-.005-.04-.012l-.046-.016q-.024-.008-.046-.018a1 1 0 0 1-.103-.05l-3.464-2a1 1 0 0 1 1-1.733L11 10.268V6a1 1 0 0 1 1-1"
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
Clock10IconBold.displayName = "Clock10IconBold";
export { Clock10IconBold };
