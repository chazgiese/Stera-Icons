import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBold = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5M3.56 13c.46 3.9 3.55 6.98 7.44 7.44V13zM13 13v7.44c3.9-.46 6.98-3.55 7.44-7.44zm0-2h7.44c-.46-3.9-3.55-6.98-7.44-7.44zm-2-7.44C7.1 4.02 4.02 7.11 3.56 11H11z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBold.displayName = 'CircleDivideCrossBold';

// Triple export pattern
export { CircleDivideCrossBold, CircleDivideCrossBold as CircleDivideCrossBoldIcon, CircleDivideCrossBold as SiCircleDivideCrossBold };
export default CircleDivideCrossBold;
export type { CircleDivideCrossBoldProps };
