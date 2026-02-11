import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightFillProps = Omit<IconBaseProps, 'children'>;

const HandRightFill = memo(
  forwardRef<SVGSVGElement, HandRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-fill" {...props}>
      <path d="M13.96 2.95c.73 0 1.31.59 1.31 1.31v6.18a.63.63 0 0 0 1.25 0V7.03a1.31 1.31 0 0 1 2.62.13v6.77a7.11 7.11 0 0 1-14.13 1.18L4.98 15 3.8 11.97l-.04-.08-.07-.12a1.31 1.31 0 0 1 2.33-1.2v.01l1.6 2.7a.63.63 0 0 0 1.16-.31V5.23a1.31 1.31 0 0 1 2.62-.13v4.86a.63.63 0 0 0 1.25 0v-5.7c0-.72.59-1.3 1.31-1.3" />
    </IconBase>
  ))
);

HandRightFill.displayName = 'HandRightFill';

// Triple export pattern (lucide-react style)
export { HandRightFill, HandRightFill as HandRightFillIcon, HandRightFill as SiHandRightFill };
export default HandRightFill;
export type { HandRightFillProps };
