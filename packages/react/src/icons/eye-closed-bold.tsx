import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconBold = memo(
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
          d="M21.318 6.635a1.001 1.001 0 0 1 1.864.729 12 12 0 0 1-2.02 3.383l2.152 2.152a1 1 0 0 1-1.415 1.414l-2.152-2.152a12 12 0 0 1-3.686 2.133l.787 2.936a1 1 0 1 1-1.932.518l-.787-2.939a12.1 12.1 0 0 1-4.259 0l-.787 2.939a1 1 0 1 1-1.932-.518l.787-2.936a12 12 0 0 1-3.686-2.133l-2.151 2.152a1 1 0 0 1-1.414-1.414l2.149-2.151C1.989 9.747 1.303 8.605.818 7.364a1.001 1.001 0 0 1 1.864-.729 10.02 10.02 0 0 0 6.696 6.016l.033.008.019.006a10 10 0 0 0 5.138 0l.02-.006.036-.008a10.02 10.02 0 0 0 6.694-6.016"
        />
        <path
          fill="currentColor"
          d="M21.318 6.636a1.001 1.001 0 0 1 1.864.729 12 12 0 0 1-2.02 3.382l2.152 2.153a1 1 0 0 1-1.415 1.414l-2.152-2.152a12 12 0 0 1-3.686 2.133l.787 2.936a1 1 0 1 1-1.932.517l-.787-2.938a12.1 12.1 0 0 1-4.259 0l-.787 2.938a1 1 0 1 1-1.932-.517l.787-2.936a12 12 0 0 1-3.686-2.133l-2.151 2.152A1 1 0 0 1 .687 12.9l2.149-2.152c-.847-1-1.533-2.142-2.018-3.383a1.001 1.001 0 0 1 1.864-.729 10.02 10.02 0 0 0 6.696 6.016l.033.008.019.005a10 10 0 0 0 5.138 0l.02-.005q.018-.005.036-.008a10.02 10.02 0 0 0 6.694-6.016"
        />
      </svg>
    ))
);
EyeClosedIconBold.displayName = "EyeClosedIconBold";
export { EyeClosedIconBold };
