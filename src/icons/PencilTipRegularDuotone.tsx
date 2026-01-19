import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilTipRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilTipRegularDuotone = memo(
  forwardRef<SVGSVGElement, PencilTipRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-tip-duotone" {...props}>
      <path d="M5.75 12.71V22a.75.75 0 0 1-1.5 0V11.96zM19.75 12.03V22a.75.75 0 0 1-1.5 0v-9.29l1.5-.75zM8.38 5.43l.14.15.44.36q.29.24.6.42l-3.34 4.29q-.16.22-.28.48l-1.35-.67.1-.2q.15-.27.35-.53zM15.62 5.43l3.34 4.3q.27.34.45.73l-1.35.67a2 2 0 0 0-.28-.48l-3.34-4.29q.32-.18.6-.42l.44-.36z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="m16.56 11.88 2.85-1.42q.32.71.34 1.5l-2.52 1.26c-.77.4-1.69.4-2.46 0l-2.02-1V22a.75.75 0 0 1-1.5 0v-9.79l-2.02 1.01c-.77.4-1.69.4-2.46 0l-2.52-1.26q.02-.79.34-1.5l2.85 1.42c.35.18.77.18 1.12 0l2.21-1.1a2.8 2.8 0 0 1 2.46 0l2.21 1.1c.35.18.77.18 1.12 0M8.38 5.43l.14.15.44.36a4.75 4.75 0 0 0 6.08 0l.44-.36.14-.15-3.03-3.9a.75.75 0 0 0-1.13-.06l-.05.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilTipRegularDuotone.displayName = 'PencilTipRegularDuotone';

// Triple export pattern (lucide-react style)
export { PencilTipRegularDuotone, PencilTipRegularDuotone as PencilTipRegularDuotoneIcon, PencilTipRegularDuotone as SiPencilTipRegularDuotone };
export default PencilTipRegularDuotone;
export type { PencilTipRegularDuotoneProps };
