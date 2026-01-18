import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckCircleFillProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFill = memo(
  forwardRef<SVGSVGElement, CheckCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m5.7 7.3a1 1 0 0 0-1.4 0l-6.2 6.18-2.3-3.08a1 1 0 1 0-1.6 1.2l2.45 3.26q.13.19.28.36c.1.12.27.28.52.4a1.5 1.5 0 0 0 1.58-.25l.33-.32 6.35-6.34a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleFill.displayName = 'CheckCircleFill';

export { CheckCircleFill };
export type { CheckCircleFillProps };
