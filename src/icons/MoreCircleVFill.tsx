import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleVFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFill = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-9.5-5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVFill.displayName = 'MoreCircleVFill';

// Triple export pattern (lucide-react style)
export { MoreCircleVFill, MoreCircleVFill as MoreCircleVFillIcon, MoreCircleVFill as SiMoreCircleVFill };
export type { MoreCircleVFillProps };
