import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MatchaIconBold = memo(
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
          d="M12 3c2.55 0 4.894.286 6.632.769.862.239 1.632.543 2.21.922C21.379 5.044 22 5.634 22 6.5c0 .086-.01.17-.021.253l-.231 2.19a9 9 0 0 1-.677 2.6C22.201 12.436 23 13.603 23 15c0 1.963-1.566 3.472-3.481 4.43C17.543 20.418 14.883 21 12 21s-5.543-.582-7.519-1.57C2.566 18.472 1 16.963 1 15c0-1.396.799-2.564 1.928-3.457a9 9 0 0 1-.676-2.6l-.23-2.19A2 2 0 0 1 2 6.5c0-.866.621-1.456 1.158-1.809.578-.38 1.348-.683 2.21-.922C7.106 3.286 9.451 3 12 3m8.066 10.306A9 9 0 0 1 12.798 17h-1.596a9 9 0 0 1-7.27-3.694C3.27 13.896 3 14.488 3 15c0 .798.673 1.789 2.376 2.64C7.019 18.463 9.36 19 12 19s4.98-.538 6.624-1.36C20.327 16.79 21 15.799 21 15c0-.512-.27-1.103-.934-1.694m-.324-4.445c-.398.158-.836.3-1.303.422C16.725 9.734 14.46 10 12 10s-4.724-.266-6.44-.717a12 12 0 0 1-1.303-.422c.113.912.396 1.764.817 2.526A7 7 0 0 0 11.202 15h1.596a7 7 0 0 0 6.128-3.613 7 7 0 0 0 .816-2.526M12 5c-2.421 0-4.578.273-6.097.695-.766.213-1.314.449-1.647.667q-.122.082-.18.136c.056.051.147.124.292.209.373.218.942.442 1.701.642C7.58 7.746 9.667 8 12 8s4.42-.254 5.93-.651c.76-.2 1.33-.424 1.702-.642.145-.085.234-.158.292-.209a2 2 0 0 0-.18-.136c-.333-.218-.88-.454-1.647-.667C16.577 5.273 14.42 5 12 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MatchaIconBold.displayName = "MatchaIconBold";
export { MatchaIconBold };
