import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpBold = memo(
  forwardRef<SVGSVGElement, ChevronsUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-up-bold" {...props}>
      <path d="M12 11a1 1 0 0 1 .7.3l7 7a1 1 0 0 1-1.4 1.4L12 13.42l-6.3 6.3a1 1 0 1 1-1.4-1.42l7-7A1 1 0 0 1 12 11" />
        <path d="M12 3a1 1 0 0 1 .7.3l7 7a1 1 0 0 1-1.4 1.4L12 5.42l-6.3 6.3a1 1 0 1 1-1.4-1.42l7-7A1 1 0 0 1 12 3" />
    </IconBase>
  ))
);

ChevronsUpBold.displayName = 'ChevronsUpBold';

// Triple export pattern (lucide-react style)
export { ChevronsUpBold, ChevronsUpBold as ChevronsUpBoldIcon, ChevronsUpBold as SiChevronsUpBold };
export default ChevronsUpBold;
export type { ChevronsUpBoldProps };
