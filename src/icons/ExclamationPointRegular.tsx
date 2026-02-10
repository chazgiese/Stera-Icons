import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointRegularProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointRegular = memo(
  forwardRef<SVGSVGElement, ExclamationPointRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="exclamation-point" {...props}>
      <path fill="currentColor" d="M12 17.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 2.5c.35 0 .68.13.91.37.24.23.35.55.34.88q0 .29-.03.56l-.44 10.13-.03.56q-.01.3-.24.5a.8.8 0 0 1-.51.22.8.8 0 0 1-.51-.21.8.8 0 0 1-.24-.51q0-.28-.03-.56L10.78 4.3l-.03-.56q-.02-.51.34-.88.37-.36.91-.37" />
    </IconBase>
  ))
);

ExclamationPointRegular.displayName = 'ExclamationPointRegular';

// Triple export pattern (lucide-react style)
export { ExclamationPointRegular, ExclamationPointRegular as ExclamationPointRegularIcon, ExclamationPointRegular as SiExclamationPointRegular };
export default ExclamationPointRegular;
export type { ExclamationPointRegularProps };
