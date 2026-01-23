import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowFillProps = Omit<IconBaseProps, 'children'>;

const PilcrowFill = memo(
  forwardRef<SVGSVGElement, PilcrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pilcrow-fill" {...props}>
      <path fill="currentColor" d="M19 3a1 1 0 1 1 0 2h-1v15a1 1 0 1 1-2 0V5h-2v15a1 1 0 1 1-2 0v-5h-2a6 6 0 0 1 0-12z" />
    </IconBase>
  ))
);

PilcrowFill.displayName = 'PilcrowFill';

// Triple export pattern (lucide-react style)
export { PilcrowFill, PilcrowFill as PilcrowFillIcon, PilcrowFill as SiPilcrowFill };
export default PilcrowFill;
export type { PilcrowFillProps };
