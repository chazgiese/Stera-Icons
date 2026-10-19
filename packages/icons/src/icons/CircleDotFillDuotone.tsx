import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 7.88c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.38 2.37 2.38 2.38-1.07 2.38-2.38S13.3 9.63 12 9.63" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.63c1.31 0 2.38 1.06 2.38 2.37S13.3 14.38 12 14.38 9.63 13.3 9.63 12 10.69 9.63 12 9.63" />
    </IconBase>
  ))
);

CircleDotFillDuotone.displayName = 'CircleDotFillDuotone';

// Triple export pattern
export { CircleDotFillDuotone, CircleDotFillDuotone as CircleDotFillDuotoneIcon, CircleDotFillDuotone as SiCircleDotFillDuotone };
export default CircleDotFillDuotone;
export type { CircleDotFillDuotoneProps };
