import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpRegularProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpRegular = memo(
  forwardRef<SVGSVGElement, ThumbsUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-up" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.7 21.75a3.75 3.75 0 0 0 3.62-2.74V19l.01-.03.04-.12.12-.42c.11-.36.26-.85.4-1.38.31-1.07.66-2.35.81-3.12.1-.49.19-1.07.27-1.62a2.7 2.7 0 0 0-2.7-3.06h-2.16c.37-1.1.6-2.45.47-3.66a4 4 0 0 0-.97-2.32A3.4 3.4 0 0 0 13 2.25a.8.8 0 0 0-.65.38l-3 5.26A2.7 2.7 0 0 1 7 9.25 3.75 3.75 0 0 0 3.25 13v4A4.75 4.75 0 0 0 8 21.75zm-4.2-1.5A3.25 3.25 0 0 1 8.25 17v-6.44a4.2 4.2 0 0 0 2.4-1.92l2.77-4.86c.53.07.87.27 1.1.51q.46.5.57 1.46c.14 1.3-.26 2.9-.76 3.92a.75.75 0 0 0 .67 1.08h3.28c.75 0 1.3.64 1.2 1.35-.07.54-.16 1.09-.25 1.55-.14.7-.47 1.91-.77 2.98l-.53 1.79-.03.11-.01.03v.01l-.01.02a2.25 2.25 0 0 1-2.17 1.66zm-3.5 0A3.25 3.25 0 0 1 4.75 17v-4c0-1.16.88-2.11 2-2.23V17c0 1.26.49 2.4 1.29 3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsUpRegular.displayName = 'ThumbsUpRegular';

// Triple export pattern (lucide-react style)
export { ThumbsUpRegular, ThumbsUpRegular as ThumbsUpRegularIcon, ThumbsUpRegular as SiThumbsUpRegular };
export default ThumbsUpRegular;
export type { ThumbsUpRegularProps };
