import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipRegularProps = Omit<IconBaseProps, 'children'>;

const PaperclipRegular = memo(
  forwardRef<SVGSVGElement, PaperclipRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip" {...props}>
      <path fill="currentColor" d="M10.5 2.25c2.35 0 4.25 1.9 4.25 4.25V14a2.75 2.75 0 1 1-5.5 0V8a.75.75 0 0 1 1.5 0v6a1.25 1.25 0 1 0 2.5 0V6.5a2.75 2.75 0 1 0-5.5 0V16a4.25 4.25 0 0 0 8.5 0V8a.75.75 0 0 1 1.5 0v8a5.75 5.75 0 0 1-11.5 0V6.5c0-2.35 1.9-4.25 4.25-4.25" />
    </IconBase>
  ))
);

PaperclipRegular.displayName = 'PaperclipRegular';

// Triple export pattern (lucide-react style)
export { PaperclipRegular, PaperclipRegular as PaperclipRegularIcon, PaperclipRegular as SiPaperclipRegular };
export default PaperclipRegular;
export type { PaperclipRegularProps };
