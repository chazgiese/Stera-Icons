import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThumbsDownBoldProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownBold = memo(
  forwardRef<SVGSVGElement, ThumbsDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-down-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.7 2a4 4 0 0 1 3.86 2.92v.01l.01.03.04.12.12.42.4 1.39a46 46 0 0 1 .82 3.13c.1.5.19 1.08.27 1.63A2.95 2.95 0 0 1 18.28 15h-1.82c.31 1.07.5 2.3.37 3.44-.1.86-.39 1.77-1.04 2.46A3.7 3.7 0 0 1 13 22a1 1 0 0 1-.8-.4l-.07-.1-3-5.27A2.5 2.5 0 0 0 7 15a4 4 0 0 1-4-4V7a5 5 0 0 1 5-5zm-4.2 2a3 3 0 0 0-3 3v6.26a4.5 4.5 0 0 1 2.36 1.98l2.69 4.7c.38-.07.62-.23.78-.4q.4-.41.51-1.32a7.5 7.5 0 0 0-.73-3.77A1 1 0 0 1 15 13h3.28c.6 0 1.03-.51.96-1.07l-.25-1.53c-.14-.68-.47-1.9-.77-2.96l-.56-1.9-.01-.03-.01-.04A2 2 0 0 0 15.7 4zm-4.04.05A3 3 0 0 0 5 7v4a2 2 0 0 0 1.5 1.93V7c0-1.1.36-2.12.96-2.95" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsDownBold.displayName = 'ThumbsDownBold';

// Triple export pattern (lucide-react style)
export { ThumbsDownBold, ThumbsDownBold as ThumbsDownBoldIcon, ThumbsDownBold as SiThumbsDownBold };
export default ThumbsDownBold;
export type { ThumbsDownBoldProps };
