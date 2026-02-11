import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetRegularProps = Omit<IconBaseProps, 'children'>;

const TargetRegular = memo(
  forwardRef<SVGSVGElement, TargetRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="target" {...props}>
      <path d="M12 9.63a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74" />
        <path fillRule="evenodd" d="M12 5.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5m0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetRegular.displayName = 'TargetRegular';

// Triple export pattern (lucide-react style)
export { TargetRegular, TargetRegular as TargetRegularIcon, TargetRegular as SiTargetRegular };
export default TargetRegular;
export type { TargetRegularProps };
