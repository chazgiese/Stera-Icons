import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallBoldProps = Omit<IconBaseProps, 'children'>;

const TennisBallBold = memo(
  forwardRef<SVGSVGElement, TennisBallBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2c-1.8 0-3.47.6-4.81 1.6a9.96 9.96 0 0 1 0 12.8 7.96 7.96 0 0 0 9.62 0 9.96 9.96 0 0 1 0-12.8c-1.34-1-3-1.6-4.81-1.6M5.75 7a7.96 7.96 0 0 0 0 10 7.96 7.96 0 0 0 0-10m12.5 0a7.96 7.96 0 0 0 0 10 7.96 7.96 0 0 0 0-10" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallBold.displayName = 'TennisBallBold';

// Triple export pattern (lucide-react style)
export { TennisBallBold, TennisBallBold as TennisBallBoldIcon, TennisBallBold as SiTennisBallBold };
export default TennisBallBold;
export type { TennisBallBoldProps };
