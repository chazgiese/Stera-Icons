import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBold = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M4.06 13A8 8 0 0 0 11 19.94V13zM13 13v6.94A8 8 0 0 0 19.94 13zm0-2h6.94A8 8 0 0 0 13 4.06zm-2-6.94A8 8 0 0 0 4.06 11H11z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBold.displayName = 'CircleDivideCrossBold';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossBold, CircleDivideCrossBold as CircleDivideCrossBoldIcon, CircleDivideCrossBold as SiCircleDivideCrossBold };
export default CircleDivideCrossBold;
export type { CircleDivideCrossBoldProps };
