import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-down-duotone" {...props}>
      <path d="M18.47 12.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 18.94z" />
        <path d="M18.47 4.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 10.94z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsDownRegularDuotone.displayName = 'ChevronsDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsDownRegularDuotone, ChevronsDownRegularDuotone as ChevronsDownRegularDuotoneIcon, ChevronsDownRegularDuotone as SiChevronsDownRegularDuotone };
export default ChevronsDownRegularDuotone;
export type { ChevronsDownRegularDuotoneProps };
