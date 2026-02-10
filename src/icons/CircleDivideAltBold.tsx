import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltBold = memo(
  forwardRef<SVGSVGElement, CircleDivideAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M4.06 13a8 8 0 0 0 15.88 0zM12 4a8 8 0 0 0-7.94 7h15.88A8 8 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideAltBold.displayName = 'CircleDivideAltBold';

// Triple export pattern (lucide-react style)
export { CircleDivideAltBold, CircleDivideAltBold as CircleDivideAltBoldIcon, CircleDivideAltBold as SiCircleDivideAltBold };
export default CircleDivideAltBold;
export type { CircleDivideAltBoldProps };
