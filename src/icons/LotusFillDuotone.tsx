import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LotusFillDuotone = memo(
  forwardRef<SVGSVGElement, LotusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lotus-fill-duotone" {...props}>
      <path d="M21 11v1A7 7 0 0 1 14.42 19l.63-.63a9 9 0 0 0 2.61-6.96q1.1-.4 2.34-.4zM4 11q1.23 0 2.34.4c-.17 2.5.7 5.05 2.61 6.96l.62.63A7 7 0 0 1 3 12v-1zM13.64 7.05a6.97 6.97 0 0 1 0 9.9L12 18.59l-1.64-1.64a7 7 0 0 1 0-9.9L12 5.41zM18.4 4.57a1 1 0 0 1 1.34.72L20.52 9H20a9 9 0 0 0-2.7.41 9 9 0 0 0-1.8-3.3l2.8-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M4 9h-.52l.78-3.7.03-.12a1 1 0 0 1 1.42-.56l2.8 1.5a9 9 0 0 0-1.82 3.3A9 9 0 0 0 4 9" clipRule="evenodd" opacity={0.4} />
        <path d="M21 11h-1q-1.23 0-2.34.4c.17 2.5-.7 5.05-2.61 6.96l-.63.63A7 7 0 0 0 21 12zM10.36 7.05a6.97 6.97 0 0 0 0 9.9L12 18.59l1.64-1.64a7 7 0 0 0 0-9.9L12 5.41zM23 12a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h2a9 9 0 0 1 2.7.41 9 9 0 0 1 2.25-3.77l2.34-2.35.08-.07a1 1 0 0 1 1.34.07l2.34 2.35a9 9 0 0 1 2.26 3.77A9 9 0 0 1 20 9h2a1 1 0 0 1 1 1zM3 12a7 7 0 0 0 6.57 6.99l-.62-.63a9 9 0 0 1-2.61-6.96A7 7 0 0 0 4 11H3z" />
    </IconBase>
  ))
);

LotusFillDuotone.displayName = 'LotusFillDuotone';

// Triple export pattern (lucide-react style)
export { LotusFillDuotone, LotusFillDuotone as LotusFillDuotoneIcon, LotusFillDuotone as SiLotusFillDuotone };
export default LotusFillDuotone;
export type { LotusFillDuotoneProps };
