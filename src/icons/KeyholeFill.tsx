import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeFillProps = Omit<IconBaseProps, 'children'>;

const KeyholeFill = memo(
  forwardRef<SVGSVGElement, KeyholeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyhole-fill" {...props}>
      <path d="M12 2a6.5 6.5 0 0 1 4.64 11.05l2.53 5.06A2 2 0 0 1 17.38 21H6.62a2 2 0 0 1-1.8-2.9l2.54-5.05A6.5 6.5 0 0 1 12 2" />
    </IconBase>
  ))
);

KeyholeFill.displayName = 'KeyholeFill';

// Triple export pattern (lucide-react style)
export { KeyholeFill, KeyholeFill as KeyholeFillIcon, KeyholeFill as SiKeyholeFill };
export default KeyholeFill;
export type { KeyholeFillProps };
