import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDotBold = memo(
  forwardRef<SVGSVGElement, CircleDotBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDotBold.displayName = 'CircleDotBold';

// Triple export pattern
export { CircleDotBold, CircleDotBold as CircleDotBoldIcon, CircleDotBold as SiCircleDotBold };
export default CircleDotBold;
export type { CircleDotBoldProps };
