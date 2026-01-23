import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusBoldProps = Omit<IconBaseProps, 'children'>;

const LotusBold = memo(
  forwardRef<SVGSVGElement, LotusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="lotus-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.37 3.22a1 1 0 0 1 1.34.07l2.34 2.35.45.47 2.8-1.5.1-.04a1 1 0 0 1 1.34.72L20.52 9H22a1 1 0 0 1 1 1v2a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h1.48l.78-3.7a1 1 0 0 1 1.45-.68l2.8 1.5q.21-.25.44-.48l2.34-2.35zm8.35 7.79q-1.08.04-2.06.39c.17 2.5-.7 5.05-2.61 6.96l-.63.63A7 7 0 0 0 21 12v-1h-1.28M3 12a7 7 0 0 0 6.57 6.99l-.62-.63a9 9 0 0 1-2.61-6.96A7 7 0 0 0 4 11H3zm7.36-4.95a7 7 0 0 0-1.96 3.87 7 7 0 0 0 1.96 6.03L12 18.59l1.64-1.64a7 7 0 0 0 0-9.9L12 5.41zM5.5 9.13q.6.1 1.2.28.24-.84.67-1.64l-1.43-.76zm11.14-1.36q.42.8.67 1.64.57-.18 1.2-.28L18.05 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusBold.displayName = 'LotusBold';

// Triple export pattern (lucide-react style)
export { LotusBold, LotusBold as LotusBoldIcon, LotusBold as SiLotusBold };
export default LotusBold;
export type { LotusBoldProps };
