import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PercentCircleRegular = memo(
  forwardRef<SVGSVGElement, PercentCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle" {...props}>
      <path fill="currentColor" d="M14.97 7.97a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 1 1-1.06-1.06zM14.75 13.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9.25 7.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleRegular.displayName = 'PercentCircleRegular';

// Triple export pattern (lucide-react style)
export { PercentCircleRegular, PercentCircleRegular as PercentCircleRegularIcon, PercentCircleRegular as SiPercentCircleRegular };
export default PercentCircleRegular;
export type { PercentCircleRegularProps };
