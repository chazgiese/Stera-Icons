import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconBold = memo(
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
          d="M5.837 2.176a5.174 5.174 0 0 1 6.458 5.752l1.18 1.18 4-3.998-.136-.137a1 1 0 0 1 .193-1.565l2.11-1.265.152-.075a1 1 0 0 1 1.07.225l.843.844a1 1 0 0 1 .15 1.222l-1.265 2.11a1 1 0 0 1-1.564.192l-.138-.136-4 3.999 1.182 1.18a5.175 5.175 0 0 1 5.753 6.459 1 1 0 0 1-1.673.45l-1.158-1.158h-1.539v1.54l1.158 1.156a1 1 0 0 1-.45 1.673 5.175 5.175 0 0 1-6.505-4.692l-3.875 3.876a3.387 3.387 0 0 1-4.79-4.79l3.874-3.876a5.175 5.175 0 0 1-4.691-6.505l.043-.126a1 1 0 0 1 1.63-.323l1.157 1.157h1.54V5.006L5.387 3.849a1 1 0 0 1 .45-1.673m-1.43 15.456a1.388 1.388 0 0 0 1.961 1.962l4.43-4.43-1.963-1.962zm4.09-13.344q.047.147.048.304v2.953a1 1 0 0 1-1 1H4.592a1 1 0 0 1-.304-.048A3.174 3.174 0 0 0 8 10.244l.13-.026a1 1 0 0 1 .835.285l4.533 4.533a1 1 0 0 1 .26.965 3.175 3.175 0 0 0 1.745 3.71 1 1 0 0 1-.047-.303v-2.953a1 1 0 0 1 1-1h2.954l.098.005q.105.01.204.042a3.17 3.17 0 0 0-3.71-1.746 1 1 0 0 1-.965-.259l-4.533-4.533a1 1 0 0 1-.259-.965 3.175 3.175 0 0 0-1.747-3.71"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToolsIconBold.displayName = "ToolsIconBold";
export { ToolsIconBold };
