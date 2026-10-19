import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-.55.45-1 1-1M12 7c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7" />
    </IconBase>
  ))
);

InfoCircleBoldDuotone.displayName = 'InfoCircleBoldDuotone';

// Triple export pattern
export { InfoCircleBoldDuotone, InfoCircleBoldDuotone as InfoCircleBoldDuotoneIcon, InfoCircleBoldDuotone as SiInfoCircleBoldDuotone };
export default InfoCircleBoldDuotone;
export type { InfoCircleBoldDuotoneProps };
