import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Headphones = memo(
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
          d="M12.302 1.254a10.73 10.73 0 0 1 7.8 3.682c1.733 1.985 2.239 4.424 2.202 6.891-.037 2.453-.614 5.026-1.127 7.336a.75.75 0 0 1-.895.57l-.061-.018-.073.329a2.75 2.75 0 0 1-5.369-1.192l.65-2.93a2.75 2.75 0 0 1 3.28-2.088 2.74 2.74 0 0 1 1.76 1.271c.187-1.117.318-2.225.335-3.3.034-2.257-.43-4.278-1.831-5.883a9.23 9.23 0 0 0-6.455-3.157L12 2.75l-.519.015a9.23 9.23 0 0 0-6.454 3.157c-1.4 1.605-1.865 3.626-1.83 5.883.016 1.075.146 2.183.332 3.3a2.75 2.75 0 0 1 5.041.817l.65 2.93a2.75 2.75 0 1 1-5.369 1.192l-.073-.33q-.03.011-.06.018a.75.75 0 0 1-.895-.569c-.513-2.31-1.09-4.883-1.127-7.336-.037-2.467.469-4.906 2.201-6.891A10.73 10.73 0 0 1 12 1.25zM7.106 16.248a1.25 1.25 0 0 0-2.44.542l.65 2.929a1.25 1.25 0 0 0 2.44-.542zm11.279-.95a1.25 1.25 0 0 0-1.492.95l-.65 2.929a1.25 1.25 0 0 0 2.44.542l.65-2.929a1.25 1.25 0 0 0-.948-1.491"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Headphones.displayName = "Headphones";
export { Headphones };
