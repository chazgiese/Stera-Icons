import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleIconFillDuotone = memo(
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
          d="M12 3c5.084 0 9 3.64 9 7.889s-3.916 7.888-9 7.888a10.1 10.1 0 0 1-3.089-.476 1 1 0 0 0-.663.018l-.09.04-3.55 1.774.555-2.216.001-.005.004-.014.008-.025.01-.035c.014-.05.04-.14.057-.248.088-.574-.079-1.401-.888-2.54C3.492 13.837 3 12.41 3 10.89 3 6.639 6.916 3 12 3"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1m0 2c-5.084 0-9 3.64-9 7.889 0 1.521.492 2.947 1.355 4.162.81 1.138.976 1.965.888 2.539-.016.108-.043.199-.057.248l-.01.035-.008.025-.004.014v.005l-.556 2.216 3.55-1.775.09-.039a1 1 0 0 1 .663-.018 10.1 10.1 0 0 0 3.089.476c5.084 0 9-3.639 9-7.888S17.084 3 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatBubbleIconFillDuotone.displayName = "ChatBubbleIconFillDuotone";
export { ChatBubbleIconFillDuotone };
