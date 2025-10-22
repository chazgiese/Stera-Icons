import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskAltIconBold = memo(
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
          d="M12 2c.598 0 1.162.21 1.55.586.387.375.583.884.45 1.414q-.1.4-.19.8a33 33 0 0 0-.76 5.387 33 33 0 0 0 4.886-3.915c.392-.38.931-.464 1.45-.317.518.149.983.532 1.282 1.05s.398 1.111.268 1.635c-.132.522-.475.946-1 1.096q-.397.114-.788.237a33 33 0 0 0-5.037 2.032 33 33 0 0 0 5.82 2.268c.525.15.868.574 1 1.096.13.523.031 1.117-.268 1.635s-.764.901-1.282 1.05c-.518.147-1.058.063-1.45-.318q-.297-.285-.598-.563a33 33 0 0 0-4.28-3.347A33 33 0 0 0 14 20c.133.53-.063 1.039-.45 1.414-.388.375-.952.586-1.55.586s-1.162-.21-1.55-.586c-.387-.375-.583-.884-.45-1.414q.1-.4.19-.8.602-2.685.755-5.369a33 33 0 0 0-4.866 3.905c-.392.381-.93.465-1.45.318-.518-.149-.982-.532-1.281-1.05-.3-.518-.399-1.111-.268-1.635.131-.522.473-.947 1-1.096q.395-.114.787-.236a33 33 0 0 0 5.035-2.032 33 33 0 0 0-5.828-2.269c-.526-.15-.867-.574-.999-1.096-.13-.524-.032-1.117.267-1.635s.764-.901 1.283-1.05c.518-.147 1.057-.063 1.45.317q.296.288.597.565a33 33 0 0 0 4.276 3.345A33 33 0 0 0 10 4c-.134-.53.063-1.039.45-1.414C10.838 2.21 11.402 2 12 2"
        />
      </svg>
    ))
);
AstriskAltIconBold.displayName = "AstriskAltIconBold";
export { AstriskAltIconBold };
