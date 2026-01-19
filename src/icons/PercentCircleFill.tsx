import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentCircleFillProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFill = memo(
  forwardRef<SVGSVGElement, PercentCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m4.7 6.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4l8-8a1 1 0 0 0 0-1.4m-1.45 6.2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 7a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleFill.displayName = 'PercentCircleFill';

// Triple export pattern (lucide-react style)
export { PercentCircleFill, PercentCircleFill as PercentCircleFillIcon, PercentCircleFill as SiPercentCircleFill };
export type { PercentCircleFillProps };
