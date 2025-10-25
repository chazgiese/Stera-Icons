import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleIconLinetone = memo(
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
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.295 0-2.541-.2-3.7-.572l.611-1.904a10.1 10.1 0 0 0 3.089.476c5.084 0 9-3.639 9-7.888S17.084 3 12 3s-9 3.64-9 7.889c0 1.521.492 2.947 1.355 4.162.549.77.801 1.396.88 1.902.04.255.035.476.004.66a1.5 1.5 0 0 1-.116.376l-.009.019-.005.009-.003.006s0 .002-.883-.467c-.884-.47-.885-.467-.885-.467l-.003.006-.005.008-.008.016a1 1 0 0 0-.035.085 1 1 0 0 0-.02.078c-.007.039 0 .035-.008-.02-.018-.113-.106-.451-.533-1.052C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3.252 17.314a1 1 0 0 1 1.94.484l-.584 2.336 3.551-1.775a1 1 0 0 1 .895 1.789l-3.551 1.774c-1.528.764-3.248-.616-2.834-2.273z"
        />
      </svg>
    ))
);
ChatBubbleIconLinetone.displayName = "ChatBubbleIconLinetone";
export { ChatBubbleIconLinetone };
