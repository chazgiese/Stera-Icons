import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.56 19.08A4 4 0 0 1 15.7 22H9.5a2 2 0 0 1-2-2V8.95a2.5 2.5 0 0 0 1.62-1.18l3.01-5.27.08-.1A1 1 0 0 1 13 2q1.77.01 2.8 1.1c.64.7.93 1.6 1.03 2.46A9 9 0 0 1 16.46 9h1.82c1.77 0 3.2 1.54 2.94 3.35-.08.55-.17 1.13-.27 1.63a46 46 0 0 1-.81 3.13l-.4 1.39-.12.37-.01.05-.04.12v.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M3 13a4 4 0 0 1 4-4q.26 0 .5-.05V20c0 1.1.9 2 2 2H6a3 3 0 0 1-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsUpFillDuotone.displayName = 'ThumbsUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ThumbsUpFillDuotone, ThumbsUpFillDuotone as ThumbsUpFillDuotoneIcon, ThumbsUpFillDuotone as SiThumbsUpFillDuotone };
export default ThumbsUpFillDuotone;
export type { ThumbsUpFillDuotoneProps };
