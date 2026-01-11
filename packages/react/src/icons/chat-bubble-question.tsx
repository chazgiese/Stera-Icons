import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleQuestionIcon = memo(
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
          d="M12 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c1.354 0 2.75.904 2.75 2.35 0 1.072-.8 1.866-1.72 2.181a.6.6 0 0 0-.238.147c-.044.048-.042.072-.042.072a.75.75 0 0 1-1.5 0c0-.893.718-1.44 1.293-1.638.507-.173.707-.514.707-.762 0-.322-.395-.85-1.25-.85-.745 0-1.199.421-1.273.715a.75.75 0 0 1-1.454-.37C9.57 6.93 10.81 6.25 12 6.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.852 0 10.75 4.235 10.75 9.639S17.852 20.527 12 20.527c-1.16 0-2.277-.166-3.325-.471l-3.283 1.642c-1.338.669-2.843-.539-2.48-1.989l.553-2.217q.013-.052.024-.089l.01-.032.008-.025.006-.02c.002-.03.02-.411-.584-1.26-1.06-1.49-1.679-3.268-1.679-5.177C1.25 5.485 6.149 1.25 12 1.25m0 1.5c-5.194 0-9.25 3.724-9.25 8.139 0 1.577.51 3.053 1.401 4.307.787 1.107.92 1.869.845 2.356-.014.09-.036.169-.05.216l-.026.088-.554 2.216a.25.25 0 0 0 .355.284l3.55-1.774.135-.053a.75.75 0 0 1 .429.01c.986.315 2.051.488 3.165.488 5.194 0 9.25-3.724 9.25-8.138 0-4.415-4.056-8.139-9.25-8.139"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatBubbleQuestionIcon.displayName = "ChatBubbleQuestionIcon";
export { ChatBubbleQuestionIcon };
