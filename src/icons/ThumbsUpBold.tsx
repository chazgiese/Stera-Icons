import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpBoldProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpBold = memo(
  forwardRef<SVGSVGElement, ThumbsUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-up-bold" {...props}>
      <path fillRule="evenodd" d="M15.7 22a4 4 0 0 0 3.86-2.92v-.01l.01-.03.04-.12.12-.42.4-1.39a46 46 0 0 0 .82-3.13c.1-.5.19-1.08.27-1.63A2.95 2.95 0 0 0 18.28 9h-1.82c.31-1.07.5-2.3.37-3.44a4.2 4.2 0 0 0-1.04-2.46A3.7 3.7 0 0 0 13 2a1 1 0 0 0-.8.4l-.07.1-3 5.27A2.5 2.5 0 0 1 7 9a4 4 0 0 0-4 4v4a5 5 0 0 0 5 5zm-4.2-2a3 3 0 0 1-3-3v-6.26a4.5 4.5 0 0 0 2.36-1.98l2.69-4.7q.55.13.78.4.4.41.51 1.32a7.5 7.5 0 0 1-.73 3.77A1 1 0 0 0 15 11h3.28c.6 0 1.03.51.96 1.07l-.25 1.53c-.14.68-.47 1.9-.77 2.96l-.56 1.9-.01.03-.01.04A2 2 0 0 1 15.7 20zm-4.04-.05A3 3 0 0 1 5 17v-4a2 2 0 0 1 1.5-1.93V17c0 1.1.36 2.12.96 2.95" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsUpBold.displayName = 'ThumbsUpBold';

// Triple export pattern (lucide-react style)
export { ThumbsUpBold, ThumbsUpBold as ThumbsUpBoldIcon, ThumbsUpBold as SiThumbsUpBold };
export default ThumbsUpBold;
export type { ThumbsUpBoldProps };
