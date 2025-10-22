import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffIconFilled = memo(
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
          d="M.229 4.364a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.271 1.543l-17-14a1 1 0 0 1-.136-1.407M14.73 18.899a7 7 0 0 1-.479.058C13.702 19 13.024 19 12.2 19H6.8c-.824 0-1.502.002-2.052-.043-.562-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.003-.392-1.565C1 14.702 1 14.025 1 13.202v-2.4c0-.824-.001-1.502.043-2.052.029-.344.076-.672.166-.985zM21.375 6.22A1.002 1.002 0 0 1 23 7v10a1.001 1.001 0 0 1-1.625.782L19 15.882V8.118zM12.2 5c.823 0 1.501 0 2.052.044.561.046 1.079.145 1.564.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.003.392 1.565C18 9.299 18 9.977 18 10.8v2.4c0 .824 0 1.502-.044 2.053-.029.343-.077.67-.166.983L4.268 5.1q.234-.036.48-.057c.55-.044 1.228-.043 2.051-.043z"
        />
      </svg>
    ))
);
VideoOffIconFilled.displayName = "VideoOffIconFilled";
export { VideoOffIconFilled };
