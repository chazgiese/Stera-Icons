import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExclamationPointRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExclamationPointRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="exclamation-point-duotone" {...props}>
      <path fill="currentColor" d="M12 18.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={.4} />
        <path fill="currentColor" d="M12 2.25q.54 0 .91.37c.23.23.35.55.34.88l-.03.6-.44 10.8-.03.6a.76.76 0 0 1-.75.72.76.76 0 0 1-.75-.72l-.03-.6-.44-10.8-.03-.6q-.02-.51.34-.88.37-.36.91-.37" />
    </IconBase>
  ))
);

ExclamationPointRegularDuotone.displayName = 'ExclamationPointRegularDuotone';

// Triple export pattern (lucide-react style)
export { ExclamationPointRegularDuotone, ExclamationPointRegularDuotone as ExclamationPointRegularDuotoneIcon, ExclamationPointRegularDuotone as SiExclamationPointRegularDuotone };
export type { ExclamationPointRegularDuotoneProps };
