import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-down-duotone" {...props}>
      <path d="M19 8.25q-.3 0-.53.22l-1.28 1.28H6.8L5.53 8.47A.8.8 0 0 0 5 8.25z" opacity={.4} />
        <path d="M18.47 8.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 14.94z" />
    </IconBase>
  ))
);

ChevronFullDownRegularDuotone.displayName = 'ChevronFullDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullDownRegularDuotone, ChevronFullDownRegularDuotone as ChevronFullDownRegularDuotoneIcon, ChevronFullDownRegularDuotone as SiChevronFullDownRegularDuotone };
export default ChevronFullDownRegularDuotone;
export type { ChevronFullDownRegularDuotoneProps };
