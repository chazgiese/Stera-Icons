import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleFill = memo(
  forwardRef<SVGSVGElement, MoreCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-4.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleFill.displayName = 'MoreCircleFill';

// Triple export pattern (lucide-react style)
export { MoreCircleFill, MoreCircleFill as MoreCircleFillIcon, MoreCircleFill as SiMoreCircleFill };
export default MoreCircleFill;
export type { MoreCircleFillProps };
