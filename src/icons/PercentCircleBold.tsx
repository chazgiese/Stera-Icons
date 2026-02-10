import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PercentCircleBold = memo(
  forwardRef<SVGSVGElement, PercentCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle-bold" {...props}>
      <path fill="currentColor" d="M14.8 7.8a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 1 1-1.4-1.4zM14.75 13.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9.25 7.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleBold.displayName = 'PercentCircleBold';

// Triple export pattern (lucide-react style)
export { PercentCircleBold, PercentCircleBold as PercentCircleBoldIcon, PercentCircleBold as SiPercentCircleBold };
export default PercentCircleBold;
export type { PercentCircleBoldProps };
