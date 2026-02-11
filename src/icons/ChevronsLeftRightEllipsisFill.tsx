import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftRightEllipsisFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisFill = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-right-ellipsis-fill" {...props}>
      <path d="M5.94 5.94a1.5 1.5 0 1 1 2.12 2.12L4.12 12l3.94 3.94a1.5 1.5 0 1 1-2.12 2.12l-5-5a1.5 1.5 0 0 1 0-2.12zM15.94 5.94a1.5 1.5 0 0 1 2.12 0l5 5a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 1 1-2.12-2.12L19.88 12l-3.94-3.94a1.5 1.5 0 0 1 0-2.12" />
        <path d="M8 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisFill.displayName = 'ChevronsLeftRightEllipsisFill';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRightEllipsisFill, ChevronsLeftRightEllipsisFill as ChevronsLeftRightEllipsisFillIcon, ChevronsLeftRightEllipsisFill as SiChevronsLeftRightEllipsisFill };
export default ChevronsLeftRightEllipsisFill;
export type { ChevronsLeftRightEllipsisFillProps };
