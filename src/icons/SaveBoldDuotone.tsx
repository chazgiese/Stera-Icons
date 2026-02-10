import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SaveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SaveBoldDuotone = memo(
  forwardRef<SVGSVGElement, SaveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="save-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 5c.88 0 1.47 0 1.98.1a5 5 0 0 1 3.92 3.92c.1.51.1 1.1.1 1.98v2.8q.02 1.85-.06 3.04c-.07.8-.21 1.51-.54 2.16a5.5 5.5 0 0 1-2.4 2.4c-.65.33-1.35.47-2.16.54q-1.19.08-3.04.06h-1.6q-1.85.02-3.04-.06A6 6 0 0 1 6 21.4 5.5 5.5 0 0 1 3.6 19a6 6 0 0 1-.54-2.16Q3 15.65 3 13.8V11c0-.88 0-1.47.1-1.98A5 5 0 0 1 7.02 5.1C7.53 5 8.12 5 9 5a1 1 0 0 1 0 2c-.98 0-1.32 0-1.59.06a3 3 0 0 0-2.35 2.36C5 9.68 5 10.02 5 11v2.8c0 1.28 0 2.17.06 2.87s.16 1.1.32 1.42c.34.66.87 1.2 1.53 1.53.32.16.73.27 1.42.32.7.06 1.6.06 2.87.06h1.6c1.28 0 2.17 0 2.87-.06a4 4 0 0 0 1.42-.32 3.5 3.5 0 0 0 1.53-1.53c.16-.32.27-.73.32-1.42.06-.7.06-1.6.06-2.87V11c0-.98 0-1.32-.06-1.58a3 3 0 0 0-2.36-2.36A10 10 0 0 0 15 7a1 1 0 0 1 0-2" opacity={.4} />
        <path fill="currentColor" d="M12 1.5a1 1 0 0 1 1 1v10.09l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V2.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SaveBoldDuotone.displayName = 'SaveBoldDuotone';

// Triple export pattern (lucide-react style)
export { SaveBoldDuotone, SaveBoldDuotone as SaveBoldDuotoneIcon, SaveBoldDuotone as SiSaveBoldDuotone };
export default SaveBoldDuotone;
export type { SaveBoldDuotoneProps };
