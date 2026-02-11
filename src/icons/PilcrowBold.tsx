import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowBoldProps = Omit<IconBaseProps, 'children'>;

const PilcrowBold = memo(
  forwardRef<SVGSVGElement, PilcrowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pilcrow-bold" {...props}>
      <path fillRule="evenodd" d="M19 3a1 1 0 1 1 0 2h-1v15a1 1 0 1 1-2 0V5h-2v15a1 1 0 1 1-2 0v-5h-2a6 6 0 0 1 0-12zm-9 2a4 4 0 1 0 0 8h2V5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PilcrowBold.displayName = 'PilcrowBold';

// Triple export pattern (lucide-react style)
export { PilcrowBold, PilcrowBold as PilcrowBoldIcon, PilcrowBold as SiPilcrowBold };
export default PilcrowBold;
export type { PilcrowBoldProps };
