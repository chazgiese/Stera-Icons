import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeBoldProps = Omit<IconBaseProps, 'children'>;

const KeyholeBold = memo(
  forwardRef<SVGSVGElement, KeyholeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyhole-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a6.5 6.5 0 0 1 4.64 11.05l2.35 4.7A2.25 2.25 0 0 1 16.98 21H7.02a2.25 2.25 0 0 1-2.01-3.26l2.35-4.7A6.5 6.5 0 0 1 12 2m0 2a4.5 4.5 0 0 0-2.79 8.03c.37.3.49.81.28 1.23l-2.7 5.38c-.07.16.05.36.23.36h9.96c.18 0 .3-.2.22-.36l-2.69-5.38a1 1 0 0 1 .28-1.23A4.49 4.49 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyholeBold.displayName = 'KeyholeBold';

// Triple export pattern (lucide-react style)
export { KeyholeBold, KeyholeBold as KeyholeBoldIcon, KeyholeBold as SiKeyholeBold };
export default KeyholeBold;
export type { KeyholeBoldProps };
