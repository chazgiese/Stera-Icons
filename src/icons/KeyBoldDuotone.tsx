import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyBoldDuotone = memo(
  forwardRef<SVGSVGElement, KeyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="key-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 1a6 6 0 0 1 3 11.2v1.89l1.2 1.2a1 1 0 0 1-.1 1.51l-1.08.8.69.7a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.42 0l-2-2A1 1 0 0 1 9 20v-7.8A6 6 0 0 1 12 1m0 2a4 4 0 0 0-1.6 7.67 1 1 0 0 1 .6.91v8l1 1L13.59 19l-.8-.8a1 1 0 0 1 .11-1.5l1.08-.8-.69-.7a1 1 0 0 1-.29-.7v-2.92a1 1 0 0 1 .6-.91A4 4 0 0 0 12 3" clipRule="evenodd" opacity={.4} />
        <path d="M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

KeyBoldDuotone.displayName = 'KeyBoldDuotone';

// Triple export pattern (lucide-react style)
export { KeyBoldDuotone, KeyBoldDuotone as KeyBoldDuotoneIcon, KeyBoldDuotone as SiKeyBoldDuotone };
export default KeyBoldDuotone;
export type { KeyBoldDuotoneProps };
