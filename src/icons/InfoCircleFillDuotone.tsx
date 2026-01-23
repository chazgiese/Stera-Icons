import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 11a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

InfoCircleFillDuotone.displayName = 'InfoCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { InfoCircleFillDuotone, InfoCircleFillDuotone as InfoCircleFillDuotoneIcon, InfoCircleFillDuotone as SiInfoCircleFillDuotone };
export default InfoCircleFillDuotone;
export type { InfoCircleFillDuotoneProps };
