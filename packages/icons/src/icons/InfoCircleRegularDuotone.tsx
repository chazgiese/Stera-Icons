import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.5c.41 0 .75.34.75.75V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75M12 7.25c.69 0 1.25.56 1.25 1.25S12.69 9.75 12 9.75s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

InfoCircleRegularDuotone.displayName = 'InfoCircleRegularDuotone';

// Triple export pattern
export { InfoCircleRegularDuotone, InfoCircleRegularDuotone as InfoCircleRegularDuotoneIcon, InfoCircleRegularDuotone as SiInfoCircleRegularDuotone };
export default InfoCircleRegularDuotone;
export type { InfoCircleRegularDuotoneProps };
