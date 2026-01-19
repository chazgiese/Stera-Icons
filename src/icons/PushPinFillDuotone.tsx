import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PushPinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PushPinFillDuotone = memo(
  forwardRef<SVGSVGElement, PushPinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="push-pin-fill-duotone" {...props}>
      <path fill="currentColor" d="M16.97 2.26a1.99 1.99 0 0 1 .68 3.75l-.62.32a.5.5 0 0 0-.28.44v3.56q0 .26.22.42L18.86 12a2 2 0 0 1 .89 1.67v1.08a2 2 0 0 1-2 2H6.25a2 2 0 0 1-2-2v-1.08a2 2 0 0 1 .9-1.67l1.88-1.25a.5.5 0 0 0 .22-.42V6.77a.5.5 0 0 0-.28-.44L6.35 6a1.99 1.99 0 0 1 .89-3.76h9.52z" opacity={.4} />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-5.25h2z" />
    </IconBase>
  ))
);

PushPinFillDuotone.displayName = 'PushPinFillDuotone';

// Triple export pattern (lucide-react style)
export { PushPinFillDuotone, PushPinFillDuotone as PushPinFillDuotoneIcon, PushPinFillDuotone as SiPushPinFillDuotone };
export default PushPinFillDuotone;
export type { PushPinFillDuotoneProps };
