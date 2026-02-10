import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleFillProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFill = memo(
  forwardRef<SVGSVGElement, PercentCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.2 5.8a1 1 0 0 0-1.4 0l-7 7a1 1 0 1 0 1.4 1.4l7-7a1 1 0 0 0 0-1.4m-1.45 5.45a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.5-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleFill.displayName = 'PercentCircleFill';

// Triple export pattern (lucide-react style)
export { PercentCircleFill, PercentCircleFill as PercentCircleFillIcon, PercentCircleFill as SiPercentCircleFill };
export default PercentCircleFill;
export type { PercentCircleFillProps };
