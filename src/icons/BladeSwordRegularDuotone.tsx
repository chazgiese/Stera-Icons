import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeSwordRegularDuotone = memo(
  forwardRef<SVGSVGElement, BladeSwordRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword-duotone" {...props}>
      <path fill="currentColor" d="M18.47 11.47a.75.75 0 1 1 1.06 1.06l-1.78 1.78v2.38l2.15 2.15 1.28.43a1 1 0 0 1 .4.24l.27.28a1 1 0 0 1 0 1.42l-.64.64a1 1 0 0 1-1.34.07l-.08-.07-.28-.28a1 1 0 0 1-.24-.39l-.43-1.28-2.15-2.15H14.3l-1.78 1.78a.75.75 0 1 1-1.06-1.06z" />
        <path fill="currentColor" d="M2.47 2.47a.8.8 0 0 1 .71-.2l4 1q.2.05.35.2L17 12.94 15.94 14 6.62 4.68l-2.59-.65.65 2.59L14 15.94 12.94 17 3.47 7.53a1 1 0 0 1-.17-.25l-.03-.1-1-4a.8.8 0 0 1 .2-.71" opacity={.4} />
    </IconBase>
  ))
);

BladeSwordRegularDuotone.displayName = 'BladeSwordRegularDuotone';

// Triple export pattern (lucide-react style)
export { BladeSwordRegularDuotone, BladeSwordRegularDuotone as BladeSwordRegularDuotoneIcon, BladeSwordRegularDuotone as SiBladeSwordRegularDuotone };
export default BladeSwordRegularDuotone;
export type { BladeSwordRegularDuotoneProps };
