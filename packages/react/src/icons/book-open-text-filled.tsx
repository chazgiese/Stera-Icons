import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenTextIconFilled = memo(
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
          d="M13.946 3.93c1.85-.878 4.604-1.41 8.336-.314a1 1 0 0 1 .718.96v13.367a1 1 0 0 1-1.282.96c-3.21-.942-5.414-.234-6.81.644a7.2 7.2 0 0 0-1.577 1.344 6 6 0 0 0-.454.591l-.016.026v.003-.002l.001-.002v-.001a1 1 0 0 1-1.724 0l.002.003v.002l-.001-.003-.016-.026-.083-.122a6 6 0 0 0-.371-.47 7.2 7.2 0 0 0-1.576-1.343c-1.397-.878-3.602-1.586-6.81-.644A1 1 0 0 1 1 17.943V4.576a1 1 0 0 1 .718-.96c3.732-1.096 6.485-.564 8.336.314.403.191.76.398 1.071.603V16a.875.875 0 1 0 1.75 0V4.533a9 9 0 0 1 1.071-.603m-6.221 8.276a9.6 9.6 0 0 0-3.28-.321.825.825 0 1 0 .11 1.645 8 8 0 0 1 2.72.264.825.825 0 0 0 .45-1.588m11.83-.321a9.6 9.6 0 0 0-3.28.321.825.825 0 0 0 .45 1.588 8 8 0 0 1 2.72-.264.825.825 0 0 0 .11-1.645M7.726 8.522a9.6 9.6 0 0 0-3.28-.323.826.826 0 0 0 .11 1.647 8 8 0 0 1 2.72.262.825.825 0 1 0 .45-1.586m11.83-.323a9.6 9.6 0 0 0-3.28.323.825.825 0 1 0 .45 1.586 8 8 0 0 1 2.72-.262.826.826 0 0 0 .11-1.647"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookOpenTextIconFilled.displayName = "BookOpenTextIconFilled";
export { BookOpenTextIconFilled };
