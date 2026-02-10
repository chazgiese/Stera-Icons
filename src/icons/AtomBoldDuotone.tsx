import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomBoldDuotone = memo(
  forwardRef<SVGSVGElement, AtomBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.28 3.8c1.92-.9 4.15-1.3 5.69.23 1.53 1.54 1.13 3.77.24 5.69q-.53 1.12-1.33 2.28a16 16 0 0 1 1.33 2.28c.9 1.92 1.3 4.15-.24 5.69-1.54 1.53-3.77 1.13-5.69.24q-1.12-.53-2.28-1.33a16 16 0 0 1-2.28 1.33c-1.91.9-4.15 1.3-5.69-.24-1.53-1.54-1.13-3.77-.24-5.69q.53-1.12 1.33-2.28A16 16 0 0 1 3.8 9.72c-.9-1.92-1.3-4.15.25-5.69C5.57 2.5 7.8 2.9 9.72 3.8A16 16 0 0 1 12 5.12a16 16 0 0 1 2.28-1.33m-7.87 9.88q-.48.75-.8 1.45c-.84 1.78-.73 2.85-.16 3.42s1.64.68 3.42-.15q.7-.34 1.44-.8a30 30 0 0 1-3.9-3.92m11.18 0a30 30 0 0 1-3.9 3.91q.74.48 1.44.8c1.78.84 2.85.73 3.42.16s.68-1.64-.15-3.42q-.34-.7-.8-1.45M12 7.62A28 28 0 0 0 7.63 12 28 28 0 0 0 12 16.38 28 28 0 0 0 16.38 12 28 28 0 0 0 12 7.62M8.88 5.6c-1.78-.83-2.85-.72-3.42-.15s-.68 1.64.15 3.42q.34.7.8 1.45a30 30 0 0 1 3.92-3.91q-.75-.48-1.45-.8m9.68-.15c-.57-.57-1.64-.68-3.42.15q-.7.34-1.45.8a30 30 0 0 1 3.91 3.92q.48-.75.8-1.45c.84-1.78.73-2.85.16-3.42" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

AtomBoldDuotone.displayName = 'AtomBoldDuotone';

// Triple export pattern (lucide-react style)
export { AtomBoldDuotone, AtomBoldDuotone as AtomBoldDuotoneIcon, AtomBoldDuotone as SiAtomBoldDuotone };
export default AtomBoldDuotone;
export type { AtomBoldDuotoneProps };
