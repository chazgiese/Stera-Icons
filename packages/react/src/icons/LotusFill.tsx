import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LotusFillProps = Omit<IconBaseProps, 'children'>;

const LotusFill = memo(
  forwardRef<SVGSVGElement, LotusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.37 3.22a1 1 0 0 1 1.34.07l2.34 2.35q.23.22.44.47l2.8-1.5.1-.04a1 1 0 0 1 1.35.72L20.52 9H22a1 1 0 0 1 1 1v2a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h1.48l.78-3.7.03-.12a1 1 0 0 1 1.42-.56l2.8 1.5-.03.03q.22-.27.47-.51l2.34-2.35zM20 11q-1.23 0-2.34.4c.17 2.5-.7 5.05-2.61 6.96l-.63.63A7 7 0 0 0 21 12v-1zM3 12a7 7 0 0 0 6.57 6.99l-.62-.63a9 9 0 0 1-2.61-6.96A7 7 0 0 0 4 11H3zm7.36-4.95a6.97 6.97 0 0 0 0 9.9L12 18.59l1.64-1.64a7 7 0 0 0 0-9.9L12 5.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusFill.displayName = 'LotusFill';

// Triple export pattern (lucide-react style)
export { LotusFill, LotusFill as LotusFillIcon, LotusFill as SiLotusFill };
export type { LotusFillProps };
