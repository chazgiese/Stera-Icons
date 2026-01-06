import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDashedIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M1.963 11.602a1 1 0 0 1 1.189.766c.135.63.372 1.273.725 1.92a1 1 0 0 1-1.755.96 9.1 9.1 0 0 1-.926-2.458 1 1 0 0 1 .767-1.188M12 1q1.03.002 2.012.165a1 1 0 0 1-.327 1.973A10 10 0 0 0 12 3c-.708 0-1.41.086-2.093.249a1 1 0 0 1-.463-1.945A11 11 0 0 1 12 1M21.555 8.076a1 1 0 0 1 1.204.742 9 9 0 0 1 0 4.14 1 1 0 0 1-1.947-.46 7 7 0 0 0 0-3.219 1 1 0 0 1 .742-1.203M13.685 18.64a1 1 0 0 1 .327 1.972 12 12 0 0 1-2.012.165 1 1 0 0 1 0-2q.866-.001 1.685-.137" />
        </g>
        <path
          fill="currentColor"
          d="M3.252 17.313a1 1 0 0 1 1.94.485l-.584 2.336 3.551-1.776a1 1 0 0 1 .895 1.79l-3.551 1.774c-1.528.764-3.248-.616-2.834-2.274zM19.376 15.407a1 1 0 0 1 1.562 1.248 10.7 10.7 0 0 1-3.113 2.625 1 1 0 0 1-.98-1.744 8.7 8.7 0 0 0 2.53-2.129M4.87 3.54a1.001 1.001 0 0 1 1.248 1.562c-1.134.906-2.024 2.038-2.556 3.28a1 1 0 0 1-1.838-.788C2.398 6.019 3.506 4.629 4.87 3.54M16.464 2.88a1 1 0 0 1 1.361-.382 10.7 10.7 0 0 1 3.113 2.624 1 1 0 0 1-1.562 1.249 8.7 8.7 0 0 0-2.53-2.13 1 1 0 0 1-.382-1.361"
        />
      </svg>
    ))
);
ChatBubbleDashedIconBoldDuotone.displayName = "ChatBubbleDashedIconBoldDuotone";
export { ChatBubbleDashedIconBoldDuotone };
