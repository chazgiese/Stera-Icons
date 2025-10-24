import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendIcon = memo(
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
          d="M19.256 2.349c1.48-.493 2.888.916 2.395 2.395l-5.237 15.712c-.587 1.758-3.089 1.713-3.612-.065l-2.089-7.104-7.103-2.089c-1.778-.523-1.823-3.026-.065-3.612zm.972 1.92a.393.393 0 0 0-.497-.496L4.019 9.01a.393.393 0 0 0 .014.75l7.068 2.078 4.37-4.368a.75.75 0 0 1 1.06 1.06L12.16 12.9l2.08 7.069a.393.393 0 0 0 .75.014z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.256 2.35c1.48-.493 2.888.916 2.395 2.396l-5.237 15.712c-.587 1.758-3.089 1.712-3.612-.066l-2.089-7.103-7.103-2.09c-1.778-.522-1.823-3.025-.065-3.611zm.972 1.921a.393.393 0 0 0-.497-.497L4.019 9.011a.393.393 0 0 0 .014.75L11.1 11.84l4.37-4.369a.75.75 0 0 1 1.06 1.06l-4.37 4.37 2.08 7.068a.393.393 0 0 0 .75.014z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendIcon.displayName = "SendIcon";
export { SendIcon };
