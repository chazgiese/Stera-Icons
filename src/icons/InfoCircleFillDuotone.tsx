import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 9a1 1 0 0 0-1 1v4.5a1 1 0 1 0 2 0V12a1 1 0 0 0-1-1m0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 11a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1M12 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

InfoCircleFillDuotone.displayName = 'InfoCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { InfoCircleFillDuotone, InfoCircleFillDuotone as InfoCircleFillDuotoneIcon, InfoCircleFillDuotone as SiInfoCircleFillDuotone };
export default InfoCircleFillDuotone;
export type { InfoCircleFillDuotoneProps };
