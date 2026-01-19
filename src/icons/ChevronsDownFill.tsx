import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownFill = memo(
  forwardRef<SVGSVGElement, ChevronsDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-down-fill" {...props}>
      <path fill="currentColor" d="M17.94 11.94a1.5 1.5 0 1 1 2.12 2.12l-7 7a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 1 1 2.12-2.12L12 17.88z" />
        <path fill="currentColor" d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12l-7 7a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 1 1 2.12-2.12L12 9.88z" />
    </IconBase>
  ))
);

ChevronsDownFill.displayName = 'ChevronsDownFill';

// Triple export pattern (lucide-react style)
export { ChevronsDownFill, ChevronsDownFill as ChevronsDownFillIcon, ChevronsDownFill as SiChevronsDownFill };
export default ChevronsDownFill;
export type { ChevronsDownFillProps };
