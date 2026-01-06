import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIcon = memo(
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
          d="M5.816 2.29c1.677-.148 2.865-.058 3.823.179.956.236 1.642.611 2.271.942.626.329 1.221.63 2.089.835.874.206 2.063.32 3.849.212.994-.06 1.902.713 1.902 1.762v7.918c0 .891-.68 1.659-1.59 1.73-2.032.156-3.447.045-4.55-.219-1.108-.264-1.86-.674-2.53-1.032-.66-.352-1.237-.653-2.089-.826-.754-.154-1.76-.215-3.241-.07v7.278a.75.75 0 0 1-1.5 0V4.015c0-.88.665-1.645 1.566-1.725m3.462 1.635c-.754-.186-1.768-.279-3.33-.14a.23.23 0 0 0-.198.23v8.202c1.511-.137 2.63-.08 3.54.104 1.08.22 1.82.613 2.496.973.667.356 1.27.68 2.173.896.908.217 2.16.33 4.085.182a.23.23 0 0 0 .206-.234V6.22c0-.132-.127-.276-.311-.265-1.888.115-3.23 0-4.284-.249-1.06-.25-1.793-.627-2.442-.968-.645-.339-1.18-.627-1.935-.813"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlagIcon.displayName = "FlagIcon";
export { FlagIcon };
