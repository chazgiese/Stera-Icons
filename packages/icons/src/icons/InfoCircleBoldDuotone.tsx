import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-.55.45-1 1-1M12 7c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7" />
    </IconBase>
  ))
);

InfoCircleBoldDuotone.displayName = 'InfoCircleBoldDuotone';

// Triple export pattern
export { InfoCircleBoldDuotone, InfoCircleBoldDuotone as InfoCircleBoldDuotoneIcon, InfoCircleBoldDuotone as SiInfoCircleBoldDuotone };
export default InfoCircleBoldDuotone;
export type { InfoCircleBoldDuotoneProps };
