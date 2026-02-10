import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExclamationPointRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="exclamation-point-duotone" {...props}>
      <path fill="currentColor" d="M12 17.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={.4} />
        <path fill="currentColor" d="M12 2.5c.35 0 .68.13.91.37.24.23.35.55.34.88q0 .29-.03.56l-.44 10.13-.03.56q-.01.3-.24.5a.8.8 0 0 1-.51.22.8.8 0 0 1-.51-.21.8.8 0 0 1-.24-.51q0-.28-.03-.56L10.78 4.3l-.03-.56q-.02-.51.34-.88.37-.36.91-.37" />
    </IconBase>
  ))
);

ExclamationPointRegularDuotone.displayName = 'ExclamationPointRegularDuotone';

// Triple export pattern (lucide-react style)
export { ExclamationPointRegularDuotone, ExclamationPointRegularDuotone as ExclamationPointRegularDuotoneIcon, ExclamationPointRegularDuotone as SiExclamationPointRegularDuotone };
export default ExclamationPointRegularDuotone;
export type { ExclamationPointRegularDuotoneProps };
