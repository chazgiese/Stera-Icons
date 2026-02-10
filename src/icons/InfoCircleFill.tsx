import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFill = memo(
  forwardRef<SVGSVGElement, InfoCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 9a1 1 0 0 0-1 1v4.5a1 1 0 1 0 2 0V12a1 1 0 0 0-1-1m0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

InfoCircleFill.displayName = 'InfoCircleFill';

// Triple export pattern (lucide-react style)
export { InfoCircleFill, InfoCircleFill as InfoCircleFillIcon, InfoCircleFill as SiInfoCircleFill };
export default InfoCircleFill;
export type { InfoCircleFillProps };
