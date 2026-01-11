import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDashedIconBold = memo(
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
          d="M3.252 17.314a1 1 0 0 1 1.94.484l-.584 2.336 3.551-1.776a1 1 0 0 1 .894 1.79l-3.55 1.774c-1.529.764-3.249-.616-2.834-2.274zM13.685 18.64a1 1 0 0 1 .327 1.972q-.98.164-2.011.165a1 1 0 1 1 0-2q.866-.001 1.684-.137M19.377 15.407a1 1 0 0 1 1.562 1.248 10.7 10.7 0 0 1-3.113 2.625 1 1 0 0 1-.98-1.744 8.7 8.7 0 0 0 2.53-2.129M1.964 11.602a1 1 0 0 1 1.188.766c.136.63.372 1.273.726 1.92a1 1 0 0 1-1.755.96 9.1 9.1 0 0 1-.926-2.458 1 1 0 0 1 .767-1.188M21.555 8.076a1 1 0 0 1 1.204.742 9 9 0 0 1 0 4.141 1 1 0 0 1-1.946-.461 7 7 0 0 0 0-3.219 1 1 0 0 1 .742-1.203M4.87 3.54A1.001 1.001 0 0 1 6.12 5.103c-1.134.905-2.024 2.038-2.556 3.279a1 1 0 0 1-1.839-.788C2.4 6.019 3.507 4.629 4.871 3.54M16.465 2.88a1 1 0 0 1 1.361-.382 10.7 10.7 0 0 1 3.113 2.624 1 1 0 0 1-1.562 1.25 8.7 8.7 0 0 0-2.53-2.13 1 1 0 0 1-.382-1.362M12 1q1.032.002 2.012.165a1 1 0 0 1-.327 1.973A10 10 0 0 0 12.001 3c-.708 0-1.41.086-2.093.249a1 1 0 0 1-.464-1.945A11 11 0 0 1 12.001 1"
        />
      </svg>
    ))
);
ChatBubbleDashedIconBold.displayName = "ChatBubbleDashedIconBold";
export { ChatBubbleDashedIconBold };
