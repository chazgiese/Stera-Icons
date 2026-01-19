import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleRegularProps = Omit<IconBaseProps, 'children'>;

const CircleRegular = memo(
  forwardRef<SVGSVGElement, CircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleRegular.displayName = 'CircleRegular';

// Triple export pattern (lucide-react style)
export { CircleRegular, CircleRegular as CircleRegularIcon, CircleRegular as SiCircleRegular };
export default CircleRegular;
export type { CircleRegularProps };
