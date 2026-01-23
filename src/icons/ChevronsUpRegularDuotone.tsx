import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-up-duotone" {...props}>
      <path fill="currentColor" d="M12 3.25q.31 0 .53.22l7 7a.75.75 0 1 1-1.06 1.06L12 5.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06l7-7a.8.8 0 0 1 .53-.22" />
        <path fill="currentColor" d="M12 11.25q.31 0 .53.22l7 7a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06l7-7a.8.8 0 0 1 .53-.22" opacity={.4} />
    </IconBase>
  ))
);

ChevronsUpRegularDuotone.displayName = 'ChevronsUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsUpRegularDuotone, ChevronsUpRegularDuotone as ChevronsUpRegularDuotoneIcon, ChevronsUpRegularDuotone as SiChevronsUpRegularDuotone };
export default ChevronsUpRegularDuotone;
export type { ChevronsUpRegularDuotoneProps };
