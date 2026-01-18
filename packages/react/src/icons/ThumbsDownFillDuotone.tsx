import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThumbsDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.56 4.92A4 4 0 0 0 15.7 2H9.5a2 2 0 0 0-2 2v11.05c.68.14 1.27.57 1.62 1.18l3.01 5.27.08.1a1 1 0 0 0 .79.4q1.77-.01 2.8-1.1c.64-.7.93-1.6 1.03-2.46a9 9 0 0 0-.37-3.44h1.82c1.77 0 3.2-1.54 2.94-3.35-.08-.55-.17-1.13-.27-1.63a46 46 0 0 0-.81-3.13l-.4-1.39-.12-.37-.01-.05-.04-.12v-.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M3 11a4 4 0 0 0 4 4q.26 0 .5.05V4c0-1.1.9-2 2-2H6a3 3 0 0 0-3 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsDownFillDuotone.displayName = 'ThumbsDownFillDuotone';

export { ThumbsDownFillDuotone };
export type { ThumbsDownFillDuotoneProps };
