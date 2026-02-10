import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBold = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-1 2.06a8 8 0 0 0 0 15.88zm2 15.88a8 8 0 0 0 0-15.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBold.displayName = 'CircleDivideBold';

// Triple export pattern (lucide-react style)
export { CircleDivideBold, CircleDivideBold as CircleDivideBoldIcon, CircleDivideBold as SiCircleDivideBold };
export default CircleDivideBold;
export type { CircleDivideBoldProps };
