import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowSquareUpBold = memo(
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
          d="M12 6a1 1 0 0 1 .707.293l5 5a1 1 0 1 1-1.414 1.414L13 9.414V17a1 1 0 1 1-2 0V9.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l5-5 .073-.066A1 1 0 0 1 12 6"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2c1.384 0 2.472 0 3.35.06.888.06 1.635.186 2.329.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.473 2.328.06.879.06 1.967.06 3.351s0 2.472-.06 3.35c-.06.888-.186 1.635-.473 2.329a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.473-.879.06-1.967.06-3.351.06s-2.472 0-3.35-.06c-.888-.06-1.635-.186-2.329-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.473-2.328C2 14.472 2 13.384 2 12s0-2.472.06-3.35c.06-.888.186-1.635.473-2.329a7 7 0 0 1 3.788-3.788c.694-.287 1.44-.413 2.328-.473C9.528 2 10.616 2 12 2m0 2c-1.412 0-2.42 0-3.215.055-.786.053-1.289.156-1.698.326A5 5 0 0 0 4.38 7.087c-.17.409-.273.912-.326 1.698C4 9.58 4 10.588 4 12s0 2.42.055 3.215c.053.785.156 1.289.326 1.698a5 5 0 0 0 2.706 2.706c.409.17.912.273 1.698.326C9.58 20 10.588 20 12 20s2.42 0 3.215-.055c.785-.053 1.289-.156 1.698-.326a5 5 0 0 0 2.706-2.706c.17-.409.273-.913.326-1.698C20 14.42 20 13.412 20 12s0-2.42-.055-3.215c-.053-.786-.156-1.289-.326-1.698a5 5 0 0 0-2.706-2.706c-.409-.17-.913-.273-1.698-.326C14.42 4 13.412 4 12 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowSquareUpBold.displayName = "ArrowSquareUpBold";
export { ArrowSquareUpBold };
