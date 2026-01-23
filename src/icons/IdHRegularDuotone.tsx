import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdHRegularDuotone = memo(
  forwardRef<SVGSVGElement, IdHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-h-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8.83 8.25a2.75 2.75 0 0 1 2.03 4.6c.7.45 1.23 1.11 1.5 1.9a.75.75 0 1 1-1.4.5 2.25 2.25 0 0 0-4.25 0 .75.75 0 1 1-1.42-.5c.28-.79.82-1.45 1.5-1.9a2.74 2.74 0 0 1 2.04-4.6m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M18 13.25a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM18 9.25a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

IdHRegularDuotone.displayName = 'IdHRegularDuotone';

// Triple export pattern (lucide-react style)
export { IdHRegularDuotone, IdHRegularDuotone as IdHRegularDuotoneIcon, IdHRegularDuotone as SiIdHRegularDuotone };
export default IdHRegularDuotone;
export type { IdHRegularDuotoneProps };
