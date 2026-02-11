import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-down-duotone" {...props}>
      <path fillRule="evenodd" d="M11.5 2.25a.75.75 0 0 0 0 1.5A3.25 3.25 0 0 0 8.25 7v6.44a4 4 0 0 0-.64-.15.75.75 0 0 0-.22 1.49L7 14.75A3.75 3.75 0 0 1 3.25 11V7A4.75 4.75 0 0 1 8 2.25zM8 3.75A3.25 3.25 0 0 0 4.75 7v4l.01.23c.1 1.05.94 1.89 1.99 2V7c0-1.26.49-2.4 1.29-3.25z" clipRule="evenodd" opacity={.4} />
        <path d="M15.7 2.25a3.75 3.75 0 0 1 3.62 2.74V5l.01.03.04.12.12.42.4 1.38c.31 1.07.66 2.35.81 3.12l.14.79.13.83a2.7 2.7 0 0 1-2.7 3.06h-2.16c.37 1.1.6 2.45.47 3.66-.1.84-.37 1.68-.97 2.32A3.4 3.4 0 0 1 13 21.75a.8.8 0 0 1-.65-.38l-3-5.26a2.7 2.7 0 0 0-1.96-1.33.75.75 0 0 1 .22-1.49 4.2 4.2 0 0 1 3.03 2.07l2.78 4.86c.53-.07.87-.27 1.1-.51q.46-.5.57-1.46c.14-1.3-.26-2.9-.76-3.91a.75.75 0 0 1 .67-1.09h3.28c.75 0 1.3-.64 1.2-1.35-.07-.54-.16-1.09-.25-1.55-.14-.7-.47-1.91-.77-2.98l-.53-1.79-.03-.11-.01-.03v-.01l-.01-.02a2.25 2.25 0 0 0-2.17-1.66H11.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ThumbsDownRegularDuotone.displayName = 'ThumbsDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ThumbsDownRegularDuotone, ThumbsDownRegularDuotone as ThumbsDownRegularDuotoneIcon, ThumbsDownRegularDuotone as SiThumbsDownRegularDuotone };
export default ThumbsDownRegularDuotone;
export type { ThumbsDownRegularDuotoneProps };
