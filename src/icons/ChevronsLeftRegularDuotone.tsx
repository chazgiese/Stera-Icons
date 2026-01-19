import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-duotone" {...props}>
      <path fill="currentColor" d="M10.47 4.47a.75.75 0 1 1 1.06 1.06L5.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
        <path fill="currentColor" d="M18.47 4.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsLeftRegularDuotone.displayName = 'ChevronsLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRegularDuotone, ChevronsLeftRegularDuotone as ChevronsLeftRegularDuotoneIcon, ChevronsLeftRegularDuotone as SiChevronsLeftRegularDuotone };
export type { ChevronsLeftRegularDuotoneProps };
