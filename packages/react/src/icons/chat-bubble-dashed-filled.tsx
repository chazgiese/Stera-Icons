import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDashedIconFilled = memo(
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
          d="M3.253 17.314a1 1 0 0 1 1.94.484l-.584 2.336 3.551-1.776a1 1 0 0 1 .895 1.79l-3.551 1.774c-1.528.764-3.249-.616-2.834-2.274zM13.69 18.858a1.001 1.001 0 0 1 .333 1.973 12 12 0 0 1-2.026.169 1 1 0 0 1 0-2c.58 0 1.145-.05 1.692-.142M19.388 15.568a1 1 0 0 1 1.573 1.235 10.7 10.7 0 0 1-3.108 2.666 1 1 0 0 1-.993-1.737 8.7 8.7 0 0 0 2.528-2.164M12 5c3.867 0 7 2.686 7 6s-3.133 6-7 6c-3.865 0-7-2.686-7-6s3.135-6 7-6M1.96 11.742a1 1 0 0 1 1.188.769 7.3 7.3 0 0 0 .726 1.941 1 1 0 0 1-1.76.951 9.3 9.3 0 0 1-.922-2.473 1 1 0 0 1 .769-1.188M21.562 8.175a1 1 0 0 1 1.2.748 9.2 9.2 0 0 1 0 4.154 1 1 0 1 1-1.947-.452 7.2 7.2 0 0 0 0-3.25 1 1 0 0 1 .747-1.2M4.83 3.597a1 1 0 0 1 1.263 1.551c-1.13.92-2.018 2.07-2.546 3.33a1 1 0 0 1-1.845-.772c.667-1.594 1.769-3.003 3.129-4.11M16.49 2.903a1 1 0 0 1 1.363-.372 10.7 10.7 0 0 1 3.108 2.666 1 1 0 1 1-1.573 1.235 8.7 8.7 0 0 0-2.528-2.164 1 1 0 0 1-.37-1.365M11.997 1q1.039.001 2.026.169a1.001 1.001 0 0 1-.334 1.973A10 10 0 0 0 11.997 3a9 9 0 0 0-2.104.255 1 1 0 0 1-.472-1.943A11 11 0 0 1 11.997 1"
        />
      </svg>
    ))
);
ChatBubbleDashedIconFilled.displayName = "ChatBubbleDashedIconFilled";
export { ChatBubbleDashedIconFilled };
