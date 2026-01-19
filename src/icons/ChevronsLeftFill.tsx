import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronsLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-fill" {...props}>
      <path fill="currentColor" d="M9.94 3.94a1.5 1.5 0 1 1 2.12 2.12L6.12 12l5.94 5.94a1.5 1.5 0 1 1-2.12 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z" />
        <path fill="currentColor" d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.12 12l5.94 5.94a1.5 1.5 0 1 1-2.12 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z" />
    </IconBase>
  ))
);

ChevronsLeftFill.displayName = 'ChevronsLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronsLeftFill, ChevronsLeftFill as ChevronsLeftFillIcon, ChevronsLeftFill as SiChevronsLeftFill };
export default ChevronsLeftFill;
export type { ChevronsLeftFillProps };
