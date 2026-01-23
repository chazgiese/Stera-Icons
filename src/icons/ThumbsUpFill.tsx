import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpFillProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpFill = memo(
  forwardRef<SVGSVGElement, ThumbsUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-up-fill" {...props}>
      <path fill="currentColor" d="M15.7 22a4 4 0 0 0 3.86-2.92v-.01l.01-.03.04-.12.12-.42.4-1.39a46 46 0 0 0 .82-3.13c.1-.5.19-1.08.27-1.63A2.95 2.95 0 0 0 18.28 9h-1.82c.31-1.07.5-2.3.37-3.44a4.2 4.2 0 0 0-1.04-2.46A3.7 3.7 0 0 0 13 2a1 1 0 0 0-.8.4l-.07.1-3 5.27q-.26.42-.63.72V20c0 1.1.9 2 2 2zM7.04 22a4 4 0 0 1-.54-2V9.03A4 4 0 0 0 3 13v6a3 3 0 0 0 3 3z" />
    </IconBase>
  ))
);

ThumbsUpFill.displayName = 'ThumbsUpFill';

// Triple export pattern (lucide-react style)
export { ThumbsUpFill, ThumbsUpFill as ThumbsUpFillIcon, ThumbsUpFill as SiThumbsUpFill };
export default ThumbsUpFill;
export type { ThumbsUpFillProps };
