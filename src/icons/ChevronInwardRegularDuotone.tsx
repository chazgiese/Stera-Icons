import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronInwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-inward-duotone" {...props}>
      <path d="M17.47 2.47a.75.75 0 1 1 1.06 1.06l-6 6c-.3.3-.77.3-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L12 7.94z" />
        <path d="M11.47 14.47c.3-.3.77-.3 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 16.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06z" opacity={.4} />
    </IconBase>
  ))
);

ChevronInwardRegularDuotone.displayName = 'ChevronInwardRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronInwardRegularDuotone, ChevronInwardRegularDuotone as ChevronInwardRegularDuotoneIcon, ChevronInwardRegularDuotone as SiChevronInwardRegularDuotone };
export default ChevronInwardRegularDuotone;
export type { ChevronInwardRegularDuotoneProps };
