import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleVRegularProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVRegular = memo(
  forwardRef<SVGSVGElement, MoreCircleVRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v" {...props}>
      <path fill="currentColor" d="M13.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        <path fill="currentColor" fillRule="evenodd" d="M22.75 12a10.75 10.75 0 1 1-21.5 0 10.75 10.75 0 0 1 21.5 0m-1.5 0a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVRegular.displayName = 'MoreCircleVRegular';

// Triple export pattern (lucide-react style)
export { MoreCircleVRegular, MoreCircleVRegular as MoreCircleVRegularIcon, MoreCircleVRegular as SiMoreCircleVRegular };
export default MoreCircleVRegular;
export type { MoreCircleVRegularProps };
