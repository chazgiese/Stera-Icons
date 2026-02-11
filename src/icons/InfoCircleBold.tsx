import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleBoldProps = Omit<IconBaseProps, 'children'>;

const InfoCircleBold = memo(
  forwardRef<SVGSVGElement, InfoCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-bold" {...props}>
      <path d="M12 11a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1M12 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

InfoCircleBold.displayName = 'InfoCircleBold';

// Triple export pattern (lucide-react style)
export { InfoCircleBold, InfoCircleBold as InfoCircleBoldIcon, InfoCircleBold as SiInfoCircleBold };
export default InfoCircleBold;
export type { InfoCircleBoldProps };
