import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreRegularProps = Omit<IconBaseProps, 'children'>;

const MoreRegular = memo(
  forwardRef<SVGSVGElement, MoreRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="more" {...props}>
      <path fill="currentColor" d="M21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

MoreRegular.displayName = 'MoreRegular';

// Triple export pattern (lucide-react style)
export { MoreRegular, MoreRegular as MoreRegularIcon, MoreRegular as SiMoreRegular };
export default MoreRegular;
export type { MoreRegularProps };
