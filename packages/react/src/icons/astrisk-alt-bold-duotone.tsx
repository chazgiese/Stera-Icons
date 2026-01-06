import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskAltIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 13.163q.534.322 1.057.667A33 33 0 0 0 14 20c.133.53-.063 1.039-.45 1.414-.388.375-.952.586-1.55.586s-1.162-.211-1.55-.586c-.386-.375-.583-.884-.45-1.414q.1-.4.19-.8c.402-1.793.65-3.58.752-5.37q.522-.343 1.058-.667M4.622 5.951c.518-.147 1.057-.063 1.45.317q.296.286.598.564a33 33 0 0 0 4.272 3.335q.036.626.05 1.25-.55.302-1.109.582a33 33 0 0 0-5.811-2.267c-.526-.15-.868-.574-1-1.096-.13-.524-.03-1.118.268-1.636.3-.518.764-.9 1.282-1.049M17.929 6.268c.393-.38.93-.465 1.45-.317.518.149.982.53 1.281 1.049.3.518.399 1.112.268 1.636-.131.522-.473.947-1 1.096q-.395.114-.787.236a33 33 0 0 0-5.026 2.03 33 33 0 0 1-1.107-.581q.012-.624.049-1.25a33 33 0 0 0 4.872-3.899" />
        </g>
        <path
          fill="currentColor"
          d="M12 2c.599 0 1.162.211 1.55.586.387.375.584.884.45 1.414q-.1.4-.19.8a32.8 32.8 0 0 0-.802 6.617 32.8 32.8 0 0 0 6.92 2.85c.526.15.869.576 1 1.098.13.524.031 1.117-.268 1.635s-.763.9-1.282 1.049c-.518.147-1.057.064-1.45-.317q-.296-.286-.597-.565a32.8 32.8 0 0 0-5.33-4.004 32.8 32.8 0 0 0-5.928 4.57c-.393.38-.933.463-1.45.316-.52-.149-.984-.531-1.283-1.049s-.398-1.111-.267-1.635c.13-.522.474-.947 1-1.097q.395-.114.787-.236a32.8 32.8 0 0 0 6.132-2.615A32.8 32.8 0 0 0 10 4c-.133-.53.063-1.039.45-1.414C10.839 2.21 11.403 2 12 2"
        />
      </svg>
    ))
);
AstriskAltIconBoldDuotone.displayName = "AstriskAltIconBoldDuotone";
export { AstriskAltIconBoldDuotone };
