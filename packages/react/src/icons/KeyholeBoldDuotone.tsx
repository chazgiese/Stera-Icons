import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyholeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyholeBoldDuotone = memo(
  forwardRef<SVGSVGElement, KeyholeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.99 17.74A2.25 2.25 0 0 1 16.98 21H7.02a2.25 2.25 0 0 1-2.01-3.26l2.35-4.7q.29.3.61.56a1 1 0 0 0 1.51-.33L6.8 18.64c-.08.16.04.36.22.36h9.96c.18 0 .3-.2.22-.36l-2.68-5.37a1 1 0 0 0 1.5.33q.33-.26.62-.55z" opacity={.4} />
        <path fill="currentColor" d="M12 2a6.5 6.5 0 0 1 4.03 11.6 1 1 0 0 1-1.24-1.57 4.49 4.49 0 1 0-5.58 0 1 1 0 0 1-1.24 1.57A6.5 6.5 0 0 1 12 2" />
    </IconBase>
  ))
);

KeyholeBoldDuotone.displayName = 'KeyholeBoldDuotone';

// Triple export pattern (lucide-react style)
export { KeyholeBoldDuotone, KeyholeBoldDuotone as KeyholeBoldDuotoneIcon, KeyholeBoldDuotone as SiKeyholeBoldDuotone };
export type { KeyholeBoldDuotoneProps };
