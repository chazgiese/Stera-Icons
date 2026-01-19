import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PercentCircleBold = memo(
  forwardRef<SVGSVGElement, PercentCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle-bold" {...props}>
      <path fill="currentColor" d="M15.3 7.3a1 1 0 1 1 1.4 1.4l-8 8a1 1 0 1 1-1.4-1.4zM15.25 13.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M8.75 7a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleBold.displayName = 'PercentCircleBold';

// Triple export pattern (lucide-react style)
export { PercentCircleBold, PercentCircleBold as PercentCircleBoldIcon, PercentCircleBold as SiPercentCircleBold };
export type { PercentCircleBoldProps };
