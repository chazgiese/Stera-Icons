import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PushPinRegularDuotone = memo(
  forwardRef<SVGSVGElement, PushPinRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="push-pin-duotone" {...props}>
      <path fillRule="evenodd" d="M16.76 2.25a1.99 1.99 0 0 1 .9 3.76l-.63.32a.5.5 0 0 0-.28.44v3.56q0 .26.22.42L18.86 12a2 2 0 0 1 .89 1.67v1.08a2 2 0 0 1-2 2H6.25a2 2 0 0 1-2-2v-1.08a2 2 0 0 1 .9-1.67l1.88-1.25a.5.5 0 0 0 .22-.42V6.77a.5.5 0 0 0-.28-.44L6.35 6a1.99 1.99 0 0 1 .89-3.76zm-9.52 1.5a.49.49 0 0 0-.22.92l.62.31a2 2 0 0 1 1.11 1.8v3.55a2 2 0 0 1-.9 1.67l-1.88 1.25a.5.5 0 0 0-.22.42v1.08c0 .28.22.5.5.5h11.5a.5.5 0 0 0 .5-.5v-1.08a.5.5 0 0 0-.22-.42L16.14 12a2 2 0 0 1-.89-1.67V6.77a2 2 0 0 1 1.1-1.79l.63-.3a.49.49 0 0 0-.22-.93z" clipRule="evenodd" opacity={.4} />
        <path d="M12.75 22a.75.75 0 0 1-1.5 0v-5.25h1.5z" />
    </IconBase>
  ))
);

PushPinRegularDuotone.displayName = 'PushPinRegularDuotone';

// Triple export pattern (lucide-react style)
export { PushPinRegularDuotone, PushPinRegularDuotone as PushPinRegularDuotoneIcon, PushPinRegularDuotone as SiPushPinRegularDuotone };
export default PushPinRegularDuotone;
export type { PushPinRegularDuotoneProps };
