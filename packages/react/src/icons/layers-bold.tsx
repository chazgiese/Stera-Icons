import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconBold = memo(
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
          d="M9.763 2a5 5 0 0 1 4.472 0l6.87 3.435c1.29.645 1.29 2.485 0 3.13l-1.87.934 1.87.936c1.29.645 1.29 2.485 0 3.13l-1.87.934 1.87.936c1.29.645 1.29 2.485 0 3.13L14.235 22a5 5 0 0 1-4.472 0l-6.869-3.435c-1.29-.645-1.29-2.485 0-3.13l1.87-.936-1.87-.934c-1.29-.645-1.29-2.485 0-3.13l1.87-.936-1.87-.934c-1.29-.645-1.29-2.485 0-3.13zm4.472 15a5 5 0 0 1-4.472 0L7 15.618l-2.765 1.381 6.424 3.212c.844.422 1.84.422 2.684 0L19.763 17 17 15.618zm0-5a5 5 0 0 1-4.472 0L7 10.618l-2.764 1.381 6.423 3.212c.844.422 1.84.422 2.684 0L19.763 12 17 10.618zm-.893-8.212a3 3 0 0 0-2.684 0L4.235 7l6.423 3.212c.844.422 1.84.422 2.684 0L19.763 7z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIconBold.displayName = "LayersIconBold";
export { LayersIconBold };
