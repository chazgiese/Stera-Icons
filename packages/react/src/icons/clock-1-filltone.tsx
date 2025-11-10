import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock1IconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4a1 1 0 0 0-1 1v6.02q0 .034.004.067.002.024.006.047a1 1 0 0 0 .087.294l.012.025a1 1 0 0 0 .052.09q.01.018.023.033a1 1 0 0 0 .172.189l.026.02.045.033.044.03.029.018.05.026q.024.013.049.024.03.014.064.024l.027.01.056.016a1 1 0 0 0 .098.02q.019.004.038.006l.053.004q.027.002.056.003L12 13l.02-.001.067-.004q.024-.002.047-.006a1 1 0 0 0 .098-.018l.04-.01.066-.021.02-.007.069-.03.026-.013.045-.024.046-.028.032-.023a1 1 0 0 0 .189-.172l.02-.026.033-.045.033-.049q.007-.011.015-.023l2-3.464a1 1 0 0 0-1.732-1L13 8.268V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v2.268l.134-.232a1 1 0 0 1 1.732 1l-2 3.464q-.007.012-.015.023l-.033.05q-.015.023-.034.044l-.02.026a1 1 0 0 1-.188.172l-.032.023-.046.028q-.022.013-.045.024-.013.007-.026.013l-.07.03-.02.007-.066.02q-.019.007-.039.01a1 1 0 0 1-.098.02l-.047.005-.067.004L12 13l-.009-.001q-.028 0-.056-.003l-.053-.004q-.019-.002-.038-.006a1 1 0 0 1-.098-.02l-.056-.016-.027-.01q-.033-.01-.064-.024-.025-.011-.048-.024l-.035-.018-.016-.008-.03-.018-.043-.03q-.023-.015-.045-.034l-.025-.02-.053-.047-.017-.017a1 1 0 0 1-.103-.124l-.023-.032a1 1 0 0 1-.052-.09l-.012-.026a1 1 0 0 1-.087-.294q-.004-.024-.006-.047L11 12.02V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock1IconFilltone.displayName = "Clock1IconFilltone";
export { Clock1IconFilltone };
