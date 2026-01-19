import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleFill = memo(
  forwardRef<SVGSVGElement, MoreCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleFill.displayName = 'MoreCircleFill';

// Triple export pattern (lucide-react style)
export { MoreCircleFill, MoreCircleFill as MoreCircleFillIcon, MoreCircleFill as SiMoreCircleFill };
export type { MoreCircleFillProps };
