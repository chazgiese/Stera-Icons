import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type InfoCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 11.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75M12 6.5A1.25 1.25 0 1 1 12 9a1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

InfoCircleRegularDuotone.displayName = 'InfoCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { InfoCircleRegularDuotone, InfoCircleRegularDuotone as InfoCircleRegularDuotoneIcon, InfoCircleRegularDuotone as SiInfoCircleRegularDuotone };
export type { InfoCircleRegularDuotoneProps };
