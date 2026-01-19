import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PeaceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceRegularDuotone = memo(
  forwardRef<SVGSVGElement, PeaceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="m12 2.75.75.03v8.91l6.3 6.3q-.5.57-1.06 1.06l-5.24-5.24v7.4a9 9 0 0 1-1.5 0v-7.4l-5.24 5.24a9 9 0 0 1-1.06-1.06l6.3-6.3v-8.9q.38-.04.75-.04" />
    </IconBase>
  ))
);

PeaceRegularDuotone.displayName = 'PeaceRegularDuotone';

// Triple export pattern (lucide-react style)
export { PeaceRegularDuotone, PeaceRegularDuotone as PeaceRegularDuotoneIcon, PeaceRegularDuotone as SiPeaceRegularDuotone };
export default PeaceRegularDuotone;
export type { PeaceRegularDuotoneProps };
