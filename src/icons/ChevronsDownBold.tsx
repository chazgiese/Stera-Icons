import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownBold = memo(
  forwardRef<SVGSVGElement, ChevronsDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-down-bold" {...props}>
      <path d="M18.3 12.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
        <path d="M18.3 4.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronsDownBold.displayName = 'ChevronsDownBold';

// Triple export pattern (lucide-react style)
export { ChevronsDownBold, ChevronsDownBold as ChevronsDownBoldIcon, ChevronsDownBold as SiChevronsDownBold };
export default ChevronsDownBold;
export type { ChevronsDownBoldProps };
