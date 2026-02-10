import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleBoldProps = Omit<IconBaseProps, 'children'>;

const CircleBold = memo(
  forwardRef<SVGSVGElement, CircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleBold.displayName = 'CircleBold';

// Triple export pattern (lucide-react style)
export { CircleBold, CircleBold as CircleBoldIcon, CircleBold as SiCircleBold };
export default CircleBold;
export type { CircleBoldProps };
