import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.5c.41 0 .75.34.75.75V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75M12 7.25c.69 0 1.25.56 1.25 1.25S12.69 9.75 12 9.75s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

InfoCircleRegularDuotone.displayName = 'InfoCircleRegularDuotone';

// Triple export pattern
export { InfoCircleRegularDuotone, InfoCircleRegularDuotone as InfoCircleRegularDuotoneIcon, InfoCircleRegularDuotone as SiInfoCircleRegularDuotone };
export default InfoCircleRegularDuotone;
export type { InfoCircleRegularDuotoneProps };
