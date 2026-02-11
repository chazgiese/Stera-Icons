import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleRegularProps = Omit<IconBaseProps, 'children'>;

const CircleRegular = memo(
  forwardRef<SVGSVGElement, CircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleRegular.displayName = 'CircleRegular';

// Triple export pattern (lucide-react style)
export { CircleRegular, CircleRegular as CircleRegularIcon, CircleRegular as SiCircleRegular };
export default CircleRegular;
export type { CircleRegularProps };
