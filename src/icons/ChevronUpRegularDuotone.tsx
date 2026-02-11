import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-up-duotone" {...props}>
      <path d="m12.53 7.47 7 7a.75.75 0 1 1-1.06 1.06L12 9.06l.53-.53c.3-.3.3-.77 0-1.06" opacity={.4} />
        <path d="M11.47 7.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 1 1-1.06-1.06z" />
    </IconBase>
  ))
);

ChevronUpRegularDuotone.displayName = 'ChevronUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronUpRegularDuotone, ChevronUpRegularDuotone as ChevronUpRegularDuotoneIcon, ChevronUpRegularDuotone as SiChevronUpRegularDuotone };
export default ChevronUpRegularDuotone;
export type { ChevronUpRegularDuotoneProps };
