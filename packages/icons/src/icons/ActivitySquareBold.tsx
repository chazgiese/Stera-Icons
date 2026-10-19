import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivitySquareBoldProps = Omit<IconBaseProps, 'children'>;

const ActivitySquareBold = memo(
  forwardRef<SVGSVGElement, ActivitySquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.54 6.5c.41.02.78.29.9.68l2.16 6.46.58-1.4c.31-.75 1.04-1.24 1.85-1.24h1.47c.55 0 1 .45 1 1s-.45 1-1 1h-1.47l-1.6 3.88c-.17.39-.55.63-.97.62s-.78-.29-.9-.68l-2.16-6.46-.58 1.4C9.5 12.51 8.78 13 7.97 13H6.5c-.55 0-1-.45-1-1s.45-1 1-1h1.47l1.6-3.88.08-.14c.18-.3.52-.5.89-.48" />
        <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ActivitySquareBold.displayName = 'ActivitySquareBold';

// Triple export pattern
export { ActivitySquareBold, ActivitySquareBold as ActivitySquareBoldIcon, ActivitySquareBold as SiActivitySquareBold };
export default ActivitySquareBold;
export type { ActivitySquareBoldProps };
