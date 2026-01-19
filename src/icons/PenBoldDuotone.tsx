import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenBoldDuotone = memo(
  forwardRef<SVGSVGElement, PenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.25 1.62c1.05 0 2.15.37 2.96 1.17.8.8 1.17 1.9 1.17 2.96 0 1.05-.37 2.15-1.17 2.96l-2.71 2.7-5.91-5.91 2.7-2.7c.8-.8 1.9-1.18 2.96-1.18m0 2c-.61 0-1.17.22-1.54.59L15.4 5.5l3.09 3.09 1.3-1.3c.36-.37.58-.93.58-1.54s-.22-1.17-.59-1.54a2.2 2.2 0 0 0-1.54-.59" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="m12.59 5.5 1.4 1.41-9.56 9.58-.69 3.77 3.77-.69L17.1 10l1.41 1.41-9.8 9.8a1 1 0 0 1-.52.27l-5.5 1a1 1 0 0 1-1.16-1.16l1-5.5.04-.15a1 1 0 0 1 .23-.38z" />
    </IconBase>
  ))
);

PenBoldDuotone.displayName = 'PenBoldDuotone';

// Triple export pattern (lucide-react style)
export { PenBoldDuotone, PenBoldDuotone as PenBoldDuotoneIcon, PenBoldDuotone as SiPenBoldDuotone };
export default PenBoldDuotone;
export type { PenBoldDuotoneProps };
