import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointFillProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointFill = memo(
  forwardRef<SVGSVGElement, ExclamationPointFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="exclamation-point-fill" {...props}>
      <path fill="currentColor" d="M12 17a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M12 2.5c.49 0 .95.18 1.28.51s.5.78.47 1.24l-.03.49-.44 8.77-.03.49c-.02.31-.16.62-.4.84q-.36.34-.85.35-.5-.01-.85-.35a1.3 1.3 0 0 1-.4-.84l-.03-.49-.44-8.77-.03-.49c-.02-.46.14-.9.47-1.24s.8-.51 1.28-.51" />
    </IconBase>
  ))
);

ExclamationPointFill.displayName = 'ExclamationPointFill';

// Triple export pattern (lucide-react style)
export { ExclamationPointFill, ExclamationPointFill as ExclamationPointFillIcon, ExclamationPointFill as SiExclamationPointFill };
export default ExclamationPointFill;
export type { ExclamationPointFillProps };
