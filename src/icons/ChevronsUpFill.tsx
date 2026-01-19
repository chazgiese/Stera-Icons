import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpFill = memo(
  forwardRef<SVGSVGElement, ChevronsUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-up-fill" {...props}>
      <path fill="currentColor" d="M12 10.5c.4 0 .78.16 1.06.44l7 7a1.5 1.5 0 1 1-2.12 2.12L12 14.12l-5.94 5.94a1.5 1.5 0 1 1-2.12-2.12l7-7A1.5 1.5 0 0 1 12 10.5" />
        <path fill="currentColor" d="M12 2.5c.4 0 .78.16 1.06.44l7 7a1.5 1.5 0 0 1-2.12 2.12L12 6.12l-5.94 5.94a1.5 1.5 0 1 1-2.12-2.12l7-7A1.5 1.5 0 0 1 12 2.5" />
    </IconBase>
  ))
);

ChevronsUpFill.displayName = 'ChevronsUpFill';

// Triple export pattern (lucide-react style)
export { ChevronsUpFill, ChevronsUpFill as ChevronsUpFillIcon, ChevronsUpFill as SiChevronsUpFill };
export default ChevronsUpFill;
export type { ChevronsUpFillProps };
