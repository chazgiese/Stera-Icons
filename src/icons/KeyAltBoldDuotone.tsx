import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, KeyAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="key-alt-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M17 6a6 6 0 1 1-5.2 9H9.91l-1.2 1.2a1 1 0 0 1-1.51-.1l-.8-1.08-.7.69a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 0-1.42l2-2A1 1 0 0 1 4 9h7.8A6 6 0 0 1 17 6m0 2a4 4 0 0 0-3.67 2.4 1 1 0 0 1-.91.6h-8l-1 1L5 13.59l.8-.8a1 1 0 0 1 1.5.11l.8 1.08.7-.69a1 1 0 0 1 .7-.29h2.92a1 1 0 0 1 .91.6A4 4 0 1 0 17 8" clipRule="evenodd" opacity={.4} />
        <path d="M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

KeyAltBoldDuotone.displayName = 'KeyAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { KeyAltBoldDuotone, KeyAltBoldDuotone as KeyAltBoldDuotoneIcon, KeyAltBoldDuotone as SiKeyAltBoldDuotone };
export default KeyAltBoldDuotone;
export type { KeyAltBoldDuotoneProps };
