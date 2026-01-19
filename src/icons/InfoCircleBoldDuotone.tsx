import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type InfoCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 11a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

InfoCircleBoldDuotone.displayName = 'InfoCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { InfoCircleBoldDuotone, InfoCircleBoldDuotone as InfoCircleBoldDuotoneIcon, InfoCircleBoldDuotone as SiInfoCircleBoldDuotone };
export type { InfoCircleBoldDuotoneProps };
