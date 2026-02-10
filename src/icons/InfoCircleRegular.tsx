import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleRegularProps = Omit<IconBaseProps, 'children'>;

const InfoCircleRegular = memo(
  forwardRef<SVGSVGElement, InfoCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle" {...props}>
      <path fill="currentColor" d="M12 10.75c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75M12 6.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

InfoCircleRegular.displayName = 'InfoCircleRegular';

// Triple export pattern (lucide-react style)
export { InfoCircleRegular, InfoCircleRegular as InfoCircleRegularIcon, InfoCircleRegular as SiInfoCircleRegular };
export default InfoCircleRegular;
export type { InfoCircleRegularProps };
