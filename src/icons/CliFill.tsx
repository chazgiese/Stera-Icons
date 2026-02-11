import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliFillProps = Omit<IconBaseProps, 'children'>;

const CliFill = memo(
  forwardRef<SVGSVGElement, CliFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-fill" {...props}>
      <path d="M20 17a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3zM2.94 4.44a1.5 1.5 0 0 1 2.12 0l6 6a1.5 1.5 0 0 1 0 2.12l-6 6a1.5 1.5 0 0 1-2.12-2.12l4.94-4.94-4.94-4.94a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CliFill.displayName = 'CliFill';

// Triple export pattern (lucide-react style)
export { CliFill, CliFill as CliFillIcon, CliFill as SiCliFill };
export default CliFill;
export type { CliFillProps };
