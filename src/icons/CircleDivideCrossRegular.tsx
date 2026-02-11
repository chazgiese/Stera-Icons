import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m-8.21 10.5a8.25 8.25 0 0 0 7.46 7.46v-7.46zm8.96 0v7.46a8.25 8.25 0 0 0 7.46-7.46zm0-1.5h7.46a8.25 8.25 0 0 0-7.46-7.46zm-1.5-7.46a8.25 8.25 0 0 0-7.46 7.46h7.46z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossRegular.displayName = 'CircleDivideCrossRegular';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossRegular, CircleDivideCrossRegular as CircleDivideCrossRegularIcon, CircleDivideCrossRegular as SiCircleDivideCrossRegular };
export default CircleDivideCrossRegular;
export type { CircleDivideCrossRegularProps };
