import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyholeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyholeRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyholeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyhole-duotone" {...props}>
      <path fill="currentColor" d="M18.77 17.86a2 2 0 0 1-1.8 2.9H7.03a2 2 0 0 1-1.79-2.9L7.66 13q.22.22.47.4a.75.75 0 0 0 1.13-.25l-2.69 5.38a.5.5 0 0 0 .45.72h9.96a.5.5 0 0 0 .44-.72l-2.68-5.38.08.13c.26.33.73.38 1.05.13l.47-.41z" opacity={.4} />
        <path fill="currentColor" d="M12 2.25a6.25 6.25 0 0 1 3.87 11.16.75.75 0 0 1-.93-1.18 4.74 4.74 0 1 0-5.88 0 .75.75 0 0 1-.93 1.18A6.24 6.24 0 0 1 12 2.25" />
    </IconBase>
  ))
);

KeyholeRegularDuotone.displayName = 'KeyholeRegularDuotone';

// Triple export pattern (lucide-react style)
export { KeyholeRegularDuotone, KeyholeRegularDuotone as KeyholeRegularDuotoneIcon, KeyholeRegularDuotone as SiKeyholeRegularDuotone };
export default KeyholeRegularDuotone;
export type { KeyholeRegularDuotoneProps };
