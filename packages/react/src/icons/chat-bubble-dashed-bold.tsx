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
          d="M3.251 17.314a1 1 0 0 1 1.94.484l-.583 2.336 3.55-1.776a1 1 0 0 1 .895 1.79l-3.55 1.774c-1.53.764-3.25-.616-2.835-2.274zM13.685 18.64a1 1 0 0 1 .327 1.972q-.981.164-2.012.165a1 1 0 0 1 0-2q.866-.001 1.685-.137M19.376 15.407a1 1 0 0 1 1.563 1.248 10.7 10.7 0 0 1-3.114 2.625 1 1 0 0 1-.98-1.744 8.7 8.7 0 0 0 2.531-2.129M1.963 11.602a1 1 0 0 1 1.189.766c.135.63.372 1.273.725 1.92a1 1 0 0 1-1.755.96 9.1 9.1 0 0 1-.926-2.458 1 1 0 0 1 .767-1.188M21.555 8.076a1 1 0 0 1 1.204.742 9 9 0 0 1 0 4.141 1 1 0 0 1-1.946-.461 7 7 0 0 0 0-3.219 1 1 0 0 1 .742-1.203M4.87 3.54a1.001 1.001 0 0 1 1.248 1.563c-1.134.905-2.024 2.038-2.555 3.279a1 1 0 0 1-1.84-.788C2.399 6.019 3.507 4.629 4.87 3.54M16.464 2.88a1 1 0 0 1 1.361-.382 10.7 10.7 0 0 1 3.114 2.624 1 1 0 0 1-1.563 1.25 8.7 8.7 0 0 0-2.53-2.13 1 1 0 0 1-.382-1.362M12 1q1.03.002 2.012.165a1 1 0 0 1-.327 1.973A10 10 0 0 0 12 3c-.708 0-1.41.086-2.093.249a1 1 0 0 1-.463-1.945A11 11 0 0 1 12 1"
        />
      </svg>
    ))
);
ChatBubbleDashedIconBold.displayName = "ChatBubbleDashedIconBold";
export { ChatBubbleDashedIconBold };
