import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointBoldProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointBold = memo(
  forwardRef<SVGSVGElement, ExclamationPointBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="exclamation-point-bold" {...props}>
      <path fill="currentColor" d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 2q.65.01 1.1.44.43.44.4 1.06l-.03.55-.44 9.9-.03.55a1 1 0 0 1-.31.68 1 1 0 0 1-.69.28 1 1 0 0 1-.69-.28 1 1 0 0 1-.31-.68l-.03-.55-.44-9.9-.03-.55c-.02-.4.12-.78.4-1.06Q11.36 2 12 2" />
    </IconBase>
  ))
);

ExclamationPointBold.displayName = 'ExclamationPointBold';

// Triple export pattern (lucide-react style)
export { ExclamationPointBold, ExclamationPointBold as ExclamationPointBoldIcon, ExclamationPointBold as SiExclamationPointBold };
export default ExclamationPointBold;
export type { ExclamationPointBoldProps };
