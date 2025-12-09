import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatMessagesIcon = memo(
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
          d="M12 3.25A4.75 4.75 0 0 1 16.75 8v1q0 .126-.008.25H18A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.085.67l-1.367-.683a2.25 2.25 0 0 0-1.006-.237H12A4.75 4.75 0 0 1 7.25 15v-1q.001-.126.008-.25h-2.55c-.35 0-.694.081-1.006.237l-1.367.684A.75.75 0 0 1 1.25 14V8A4.75 4.75 0 0 1 6 3.25zm0 7.5A3.25 3.25 0 0 0 8.75 14v1A3.25 3.25 0 0 0 12 18.25h7.292a3.75 3.75 0 0 1 1.677.395l.281.141V14A3.25 3.25 0 0 0 18 10.75zm-6-6A3.25 3.25 0 0 0 2.75 8v4.786l.281-.14a3.75 3.75 0 0 1 1.677-.396h2.875q.063-.159.137-.312l.009-.018q.068-.14.146-.275l.03-.052q.075-.127.157-.25l.039-.056q.085-.121.177-.238l.02-.026q.099-.122.205-.237l.045-.047q.09-.095.182-.184l.044-.041q.101-.092.205-.179l.072-.059a5 5 0 0 1 .221-.165l.062-.043a5 5 0 0 1 .235-.15l.056-.032q.276-.16.575-.282l.037-.016q.149-.06.3-.109l.038-.012a5 5 0 0 1 .655-.155l.07-.01a5 5 0 0 1 .318-.036l.032-.002q.174-.014.35-.014h3.24a3 3 0 0 0 .01-.25V8A3.25 3.25 0 0 0 12 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatMessagesIcon.displayName = "ChatMessagesIcon";
export { ChatMessagesIcon };
