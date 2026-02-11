import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 11a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1M12 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

InfoCircleBoldDuotone.displayName = 'InfoCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { InfoCircleBoldDuotone, InfoCircleBoldDuotone as InfoCircleBoldDuotoneIcon, InfoCircleBoldDuotone as SiInfoCircleBoldDuotone };
export default InfoCircleBoldDuotone;
export type { InfoCircleBoldDuotoneProps };
